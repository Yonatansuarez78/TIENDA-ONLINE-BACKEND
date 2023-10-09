import { z } from 'zod'

export const registerSchema = z.object({
    username: z.string({
        required_error: 'Nombre de usuario es requedrido'
    }),
    email: z.string({
        required_error: 'Correo electronico es requerido'
    }).email({
        required_error: 'Correo invalido'
    }),
    password: z.string({
        required_error: 'Contraseña es requerida'
    }).min(6, {
        message: 'Contraseña minimo de 6 caracteres'
    })
})

export const loginSchema = z.object({
    email: z.string({
        required_error: 'Correo electronico es requerido'
    }).email({
        message: 'Correo invalido'
    }),
    password: z.string({
        required_error: 'Contraseña es requerida'
    }).min(6, {
        message: 'Contraseña minimo de 6 caracteres'
    })
})