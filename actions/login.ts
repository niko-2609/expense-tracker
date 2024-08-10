'use server'
import { signIn } from "@/auth";
import { LoginSchema } from "@/schema";
import { AuthError } from "next-auth";
import * as z from 'zod';

export const login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values);

    if (!validatedFields.success) return {error: "Login failed, try again!"}

    const { email, password } =   validatedFields.data;

    console.log("Login server action called here ")
    try {
        const result = await signIn("credentials", {
            email, 
            password,
            redirect: false
        })
       return {success: "Logged in"}
    } catch (error) {
         if (error instanceof AuthError) {
            switch(error.type) {
                case "CredentialsSignin":
                    return {error: "Invalid credentials"}
                default:
                    return {error: "Something went wrong"}

            }
         }
         throw error;
    }
  
}