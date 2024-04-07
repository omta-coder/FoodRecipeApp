import express from 'express';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute.js'
import recipeRoute from './routes/reciepeRoute.js'
import dotenv from 'dotenv'
import cors  from 'cors'
dotenv.config()

const app = express();
app.use(express.json());
app.use(cors({
    origin:true,
    methods:['GET','POST','PUT',"DELETE"],
    credentials: true
}))

//user Route
app.use('/api',userRoute)

//recipe route
app.use('/api',recipeRoute)

mongoose.connect(process.env.MONGODB)
.then(() => {
    console.log('Connected to MongoDB');
}).catch((err) =>{
    console.error(err);
});

app.listen(3000,(req,res)=>{
    console.log("server run on port 3000");
})

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode  || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success:false,
        message,
        statusCode
    })
})