import userModel from "../models/user.js"

export const signup = async (req, res, next) => {
    console.log(req.body)
    try{
        const newUser = new userModel({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password
          })     
          await newUser.save();
    }catch(err) {
       res.send(err);
    }
    
}

export const login = (req, res, next) => {
     
    res.send('login route called')
}