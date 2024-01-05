import prisma from "@/utils/connect"
import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth, { getServerSession } from "next-auth"
// import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"

const authOptions = {
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
}

export const getAuthSessions = () => getServerSession(authOptions);

const handler = NextAuth(authOptions) 

export { handler as GET, handler as POST, } 