import User from '../models/userModel.js';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { errorHandler } from '../utils/error.js';

export  const register = async (req, res,next) => {
    const  {name,email,password} = req.body;
    const hashedPassword = bcrypt.hashSync("password",10)
    const newUser = new  User({name,email,password:hashedPassword});
    try {
        await  newUser.save()
         res.status(201).json("newUser created");
    } catch (error) {
        next(error);
    }
}

export const login  = async (req,res,next)=>{
   const{ email , password }= req.body ;
   try {
    const validUser = await User.findOne({email})
    if(!validUser) return next(errorHandler(401, "User not found"))
    const validPassword = bcrypt.compareSync("password",validUser.password);
   if (!validPassword ) return next(errorHandler(401,'Invalid Password'));
   const token = jwt.sign({userId:validUser._id},"!@#$%^&*()",{
    expiresIn:'1d'
});
  
   res.json({message:`Welcome ${validUser.name}`,token})
   } catch (error) {
    next(error);
   }
}
