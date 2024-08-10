import NextAuth , { User, type DefaultSession} from "next-auth"
import authConfig from "@/auth.config"
 
import { PrismaAdapter } from "@auth/prisma-adapter"
import { db } from "./lib/db/dbUtils"
import { getUserById } from "@/data/user"

 


 
export const { handlers, auth, signIn, signOut } = NextAuth({
  pages :{
    signIn: "/sign-in",
    error: "/"
  },
  events: {
    async linkAccount ({user}) {

      // once the user is signed in with OAuth provider,
      // this will update the emailVerified field for that user to the present/current date.
      await db.user.update({
        where :{ id: user.id},
        data: {emailVerified: new Date()}
      })
    }
  },
  callbacks: {
    async session({ session, user, token}) {
      console.log("Session Callback called here")
      // Adding user id(sub) from token in session
      if (token.sub && session.user) {
           session.user.id = token.sub
      }
      return session
    },
    async jwt({token}) {

      console.log("JWT Callback called here")
      // check if the user id exists in token, if no, return the token
      if (!token.sub) return token;

      // default return 
      return token
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
})