import userModel from "../models/user.js"
import { loginValidation, registerValidation } from "../utils/validation.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
    // vaidation error check
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error);

    //check if email exist
    const emailExist = await userModel.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send('Email Already Exist');

    // create hashed password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // create User
    const newUser = new userModel({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: hashedPassword
    })
    try {
        await newUser.save();
        res.status(200).send({userId: newUser._id});
    } catch (err) {
        res.status(400).send(err);
    }
}

export const login = async(req, res, next) => {
    // check validation error
    const {error} = loginValidation(req.body);
    if(error) return res.status(400).send(error);

    // check if email exist

    const user = await userModel.findOne({email: req.body.email});
    if(!user) return res.status(400).send("username/ password not found")
    
    // check if password matches
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('username/ password not found');

    const token = jwt.sign({_id:user._id}, process.env.SECRET_TOKEN)
    res.header('auth-token', token).send(token)
}