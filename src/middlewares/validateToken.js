import jwt from 'jsonwebtoken'
import {TOKEN_SECRET} from '../config.js'

export const authRequired = (req, res, next) => {
    const {token} = req.cookies
    const tokenApp = req.headers['authorization']?.split(' ')[1]; // `Bearer <token>`


    if (!token && !tokenApp) return res.status(401).json({ message: "not token, autorizacion denegada"})
    const tokens = token || tokenApp;

    jwt.verify(tokens, TOKEN_SECRET, (err, user) => {
        if(err) return res.status(401).json({message: "token invalido"})
        req.user = user
        console.log(user)
        next()
    })
};
