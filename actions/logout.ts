"use server"
import { signOut } from "@/auth"
import { cookies } from 'next/headers'

export const logout = async () => {
    console.log("INSIDE LOGOUT ACTION")
    cookies().delete('authjs.callback-url')
    cookies().delete('authjs.csrf-token')
    cookies().delete('authjs.session-token')
    await signOut({
        redirectTo: "/"
    });
}