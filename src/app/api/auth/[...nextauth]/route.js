import mongoose from "mongoose";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials"
import {User} from "../../models/User"
import bcrypt from "bcrypt";

const handler = NextAuth({
    providers:[
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
             
            credentials: {
              username: { label: "Username", type: "text", placeholder: "test@gmail.com" },
              password: { label: "Password", type: "password" }
            },

            async authorize(credentials, req) {

              const {email,password} = credentials;

              mongoose.connect(process.env.MONGO_URL)

              const user = await User.findOne({email})

              if(user && bcrypt.compareSync(password,user.password)){
                  return user;
              }

              return null;
            }
          })
    ]
})

// Exporting HTTP methods
export const GET = handler;
export const POST = handler;