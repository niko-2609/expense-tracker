import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig, User } from "next-auth"
import bcrypt from "bcryptjs";


import { LoginSchema } from "@/schema"
import { getUserByEmail } from "@/data/user"
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
 


// Notice this is only an object, not a full Auth.js instance
export default {
  /**
   * Adding Credentials provider for siging in with email/passwd
   */
  providers: [
    // Google({
    //   clientId: process.env.AUTH_GOOGLE_ID,
    //   clientSecret: process.env.AUTH_GOOGLE_SECRET,
    // }),
    // Github({
    //   clientId: process.env.AUTH_GITHUB_ID,
    //   clientSecret: process.env.AUTH_GITHUB_SECRET,
    // }),
    Credentials({
    async authorize(credentials) {


      console.log("CREDENTIALS AUTHORIZED IS CALLED")
      // Check the schema of the user input 
      const validatedFields = LoginSchema.safeParse(credentials)


      if (validatedFields.success) {
        const { email , password } = validatedFields.data;

        // Get user from database
        const user = await getUserByEmail(email);
        if (!user || !user.password) return null;

        // Compare the password
        const passwordsMatch = await bcrypt.compare(
          password,
          user.password
        )
        console.log("PASSWORDS MATCH", passwordsMatch)

        
        if (!passwordsMatch) {
          console.log("CREDENTIALS AUTHORIZE RETURNING NULL")
          return null

        }
        console.log("CREDENTIALS AUTHORIZE RETURNING WITH VALID USER")
        // is passwords are matched, return user
        if (passwordsMatch) return user;
      }


      console.log("CREDENTIALS AUTHORIZE RETURNING FOR DEFAULT CASE")
      // Break by default
      return null
    }
    
  })],
} satisfies NextAuthConfig