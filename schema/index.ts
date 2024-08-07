import * as z from 'zod'


export const RegisterSchema = z.object({
    firstName: z.string().min(1, {
        message: "First name is required"
    }),
    lastName: z.string(),
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(1,{
        message: "Password is required"
    })
})


export const LoginSchema = z.object({
    email: z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(1, {
        message: "Password is required"
    })
})