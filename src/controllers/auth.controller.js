import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'
import {createAcessToken} from '../libs/jwt.js'
import jwt from 'jsonwebtoken'
import {TOKEN_SECRET} from '../config.js'

export const register = async(req, res) => {
    const { email, password, username} = req.body
    try {
        const userFound = await User.findOne({email})
        if (userFound) return res.status(400).json(["Correo electronico ya existe"])
        const passwordHash = await bcrypt.hash(password, 10)    
                                                                                            
        const newUser = new User({
            username,
            email,
            password: passwordHash
        })
        const userSaved = await newUser.save()
        const token = await createAcessToken({id: userSaved._id})

        res.cookie('token', token)
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt
            
        })
    } catch (error) {
        res.status(500).json({ message: error.message})
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

        if (!isMatch) {
            return res.status(400).json({ message: "Contraseña incorrecta" });
        }

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

export const profile = async(req, res) => {
    const userFound = await User.findById(req.user.id)
    if(!userFound) return res.status(400).json({message: "usuario no encontrado"})

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
    const userId = req.user.id; // Suponiendo que el ID del usuario viene del middleware de autenticación

    try {
        const updatedFields = {};

        // Validación básica (podrías usar una librería de validación más robusta)
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