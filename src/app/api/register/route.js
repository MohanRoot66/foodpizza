
import mongoose from "mongoose";
import { User } from "../models/User";

export async function POST(req) {
    try {
        let { email,password} = await req.json(); // Assuming req.json() returns { email, passwrd }

        console.log("===>",email,password,"===>")

        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Connected to MongoDB");

        const createdUser = await User.create({
            email,
            password,
        });

        console.log("User created:", createdUser);

        return Response.json(createdUser);
    } catch (error) {
        console.error("Error:", error);
        return Response.json({ error: error.message }, { status: 500 });
    }
}
