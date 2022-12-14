import jwt from 'jsonwebtoken';

export default function verify(req, res, next){
    const token = req.header('auth-token');
    if(!token) return res.status(400).send('Access Denied');
    
    try{
        const  verified = jwt.verify(token, process.env.SECRET_TOKEN)
        req.user = verified;
        next();
    }catch(err){
        res.status(400).send('Invalid Token')
    }
}