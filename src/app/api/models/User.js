import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        unique:true
    },
    password: {
        type: String,
        unique:true,
        validate: {
            validator: (pass) => {
                return pass && pass.length >= 5;
            },
            message: "Password must be at least 5 characters long", 
        },
    },
}, {
    timestamps: true,
});

UserSchema.post("validate",user=>{
    const pass = user.password;
    const salt = bcrypt.genSaltSync(10)
    const hashedPass = bcrypt.hashSync(pass,salt);

    user.password=hashedPass
})

export const User = mongoose.models.User || mongoose.model("User", UserSchema);
