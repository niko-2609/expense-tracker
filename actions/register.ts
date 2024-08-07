'use server'

import { RegisterSchema } from "@/schema";
import * as z from 'zod';
import bcrypt from 'bcryptjs'
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db/dbUtils";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    // check the user input values
    const validatedFields = RegisterSchema.safeParse(values);

    // validation fails
    if (!validatedFields.success) return {error: "Failed to register user"}

    const { email, password, firstName, lastName } = validatedFields.data;

    const hashedPassword = await bcrypt.hash(password, 12)
    const existingUser = await getUserByEmail(email)


    if (existingUser) return { error: "Email already exists!"}

    await db.user.create({
        data:{
            name: firstName + lastName,
            email,
            password: hashedPassword
            
        }
    })

    return { success: "User registered!"}
 }