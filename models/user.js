import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min:3
    },
    email: {
        type: String,
        required: true,
        min:3
    },
    phone:{
        type: String,
        min:10,
        max: 10
    },
    password:{
        type: String,
        required: true,
        min:6
    }
})

const userModel = mongoose.model('user', userSchema);

export default userModel;