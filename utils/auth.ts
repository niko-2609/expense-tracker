'use server'
import { auth } from "@/auth"

export const getSession = async () => {
    const session = await auth()
    if (session !== null) return session
    return null
}