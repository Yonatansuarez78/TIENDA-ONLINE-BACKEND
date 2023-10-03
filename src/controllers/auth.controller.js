import User from '../models/user.model.js'
import bcrypt from 'bcryptjs'

export const register = async(req, res) => {
    const { email, password, username} = req.body
    try {
        const passwordHash = await bcrypt.hash(password, 10)    
                                                                                            
        const newUser = new User({
            username,
            email,
            password: passwordHash
        })
        const userSaved = await newUser.save()
        res.json({
            id: userSaved._id,
            username: userSaved.username,
            idemail: userSaved.email,
            password: userSaved.password,
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt
            
        })
    } catch (error) {
        console.log(error)
    }
}

export const login = (req, res) => res.send('login')