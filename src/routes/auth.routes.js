import {Router} from 'express'
import { login, register, profile, logout, verifyToken, updateUser, forgotPassword, resetPassword } from '../controllers/auth.controller.js'
import {authRequired} from '../middlewares/validateToken.js'
import {validateSchema} from '../middlewares/validator.middleware.js'
import {registerSchema, loginSchema} from '../schemas/auth.schema.js'

import { createOrder, getOrdersByUser } from '../controllers/order.controller.js';

const router = Router()

router.post('/register', validateSchema(registerSchema), register)
router.post('/login', validateSchema(loginSchema), login)
router.post('/logout', logout)

router.get('/verify', verifyToken)
router.get('/profile', authRequired, profile)
router.put('/updateProfile', authRequired, updateUser);

router.post('/orders', createOrder);
router.get('/orders', authRequired, getOrdersByUser);

router.post('/forgot', forgotPassword);
router.post('/reset-password', resetPassword);


export default router