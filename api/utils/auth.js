import { errorHandler } from "./error.js";
import jwt from 'jsonwebtoken'


export const verifyToken = async(req,res,next)=>{
    const token = req.cookies.access_token;
     if(!token) return next(errorHandler(401,'you are not Authenticated!'));

     jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
        if(err) return next(errorHandler(403,'Invalid  Token!'));
         req.user= user;
         next();
     })
}