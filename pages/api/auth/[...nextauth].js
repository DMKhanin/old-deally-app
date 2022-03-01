import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email"
import FacebookProvider from "next-auth/providers/facebook"
import GoogleProvider from "next-auth/providers/google"

import { MongoDBAdapter } from "@next-auth/mongodb-adapter"

import clientPromise from '@helpers/adapters/clientPromise';

const options = {
  // Configure one or more authentication providers
  // site: process.env.NEXTAUTH_URL,
  adapter: MongoDBAdapter({
    db: (await clientPromise).db("your-database")
  }),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM
    }),
    FacebookProvider({
        clientId: process.env.FACEBOOK_LOGIN_APP_ID,
        clientSecret: process.env.FACEBOOK_LOGIN_APP_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  }
};

// http://localhost:3000/api/auth/callback/facebook

export default (req, res) => NextAuth(req, res, options)