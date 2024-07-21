import {Router} from 'express'
import { login, register, profile, logout, verifyToken } from '../controllers/auth.controller.js'
import {authRequired} from '../middlewares/validateToken.js'
import {validateSchema} from '../middlewares/validator.middleware.js'
import {registerSchema, loginSchema} from '../schemas/auth.schema.js'

import { createOrder } from '../controllers/order.controller.js';

const router = Router()

router.post('/register', validateSchema(registerSchema), register)
router.post('/login', validateSchema(loginSchema), login)
router.post('/logout', logout)

router.get('/verify', verifyToken)
router.get('/profile', authRequired, profile)

router.get('/profile', authRequired, profile)

router.post('/orders', createOrder);


export default router