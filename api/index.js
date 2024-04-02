import express from 'express';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express();
app.use(express.json());

//user Route
app.use('/api',userRoute)

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