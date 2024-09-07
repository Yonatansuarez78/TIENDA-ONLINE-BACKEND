import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import { createAcessToken } from '../libs/jwt.js'
import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from '../config.js'
import sendMail from '../utils/mailer.js'
import crypto from 'crypto'

export const register = async (req, res) => {
    const { username, email, password } = req.body
    try {
        const userFound = await User.findOne({ email })
        if (userFound)
             return res.status(400).json(["Correo electronico ya existe"])

        // Encriptar la contraseña
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        console.log('Hash generado en registro:', hashedPassword); // Verifica el hash generado

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })
        
        const userSaved = await newUser.save()
        console.log('usuario guardado:', userSaved)
        
        const token = await createAcessToken({ id: userSaved._id })
        console.log('token:', token)

        res.cookie('token', token)
        
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt

        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const userFound = await User.findOne({ email });

        if (!userFound) {
            return res.status(400).json({ message: "Usuario no encontrado" });
        }

        const isMatch = await bcrypt.compare(password, userFound.password);
        if (!isMatch) return res.status(400).json({ message: "Contraseña incorrecta" });

        const token = await createAcessToken({ id: userFound._id });

        res.cookie('token', token);
        res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt
        });
    } catch (error) {
        console.error(error); // Imprime el error en la consola para debug
        res.status(500).json({ message: "Error interno del servidor" });
    }
};


export const logout = (req, res) => {
    res.cookie('token', " ", {
        expires: new Date(0)
    })
    return res.sendStatus(200)
}

export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id)
    if (!userFound) return res.status(400).json({ message: "usuario no encontrado" })

    return res.json({
        id: userFound._id,
        username: userFound.username,
        idemail: userFound.email,
        createdAt: userFound.createdAt,
        updatedAt: userFound.updatedAt
    })
    res.send("profile")
}


export const verifyToken = async (req, res) => {
    const { token } = req.cookies;
    if (!token) return res.send(false);

    jwt.verify(token, TOKEN_SECRET, async (error, user) => {
        if (error) return res.sendStatus(401);

        const userFound = await User.findById(user.id);
        if (!userFound) return res.sendStatus(401);

        return res.json({
            id: userFound._id,
            username: userFound.username,
            email: userFound.email,
        });
    });
};


export const updateUser = async (req, res) => {
    const { username, password } = req.body;
    const userId = req.user.id;

    try {
        const updatedFields = {};

        // Validación básica
        if (username && typeof username === 'string') {
            updatedFields.username = username;
        }
        if (password && typeof password === 'string' && password.length >= 6) {
            const salt = await bcrypt.genSalt(10);
            updatedFields.password = await bcrypt.hash(password, salt);
        }

        // Actualizar usuario
        const user = await User.findByIdAndUpdate(userId, updatedFields, { new: true, select: '-password' });
        if (!user) {
            return res.status(404).json({ msg: 'Usuario no encontrado' });
        }

        // Generar nuevo token
        const payload = {
            user: {
                id: user.id,
                username: user.username
            }
        };

        const newToken = jwt.sign(payload, TOKEN_SECRET);
        res.json({ user, token: newToken });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: 'Error en el servidor' });
    }
};



export const forgotPassword = async (req, res) => {
    const { email } = req.body;
    try {
        const userFound = await User.findOne({ email });

        if (!userFound) {
            return res.status(400).json({ message: "Usuario no encontrado" });
        }

        // Generar un token
        const resetToken = crypto.randomBytes(32).toString('hex');
        userFound.resetToken = resetToken;
        userFound.resetTokenExpiration = Date.now() + 3600000; // 1 hora de validez
        await userFound.save();

        // Enviar correo electrónico
        const resetUrl = `https://tienda-online-frontend.vercel.app/ResetPassword?token=${resetToken}`;
        await sendMail(userFound.email, 'Restablecimiento de contraseña', `
    <p>Haz clic en el siguiente enlace para restablecer tu contraseña: <a href="${resetUrl}">Restablecer contraseña</a></p>`);

        res.status(200).json({ message: 'Correo de restablecimiento de contraseña enviado' });

    } catch (error) {
        console.error('Error en la solicitud de restablecimiento de contraseña:', error);
        res.status(500).json({ message: 'Error al procesar la solicitud' });
    }
};


// Restablecer la contraseña
export const resetPassword = async (req, res) => {
    const { token, newPassword } = req.body;

    // Encontrar el usuario con el token y verificar si no ha expirado
    const user = await User.findOne({
        resetToken: token,
        resetTokenExpiration: { $gt: Date.now() },
    });

    if (!user) {
        return res.status(400).json({ message: 'Token de restablecimiento inválido o expirado' });
    }

    // Hashear la nueva contraseña
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    user.resetToken = undefined;
    user.resetTokenExpiration = undefined;
    await user.save();

    res.status(200).json({ message: 'Contraseña restablecida con éxito' });
};

