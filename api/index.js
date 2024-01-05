import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
import cookieParser from 'cookie-parser';
dotenv.config(); //initialize the dotenv

mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB!');
}).catch((err) => {
    console.log(err)
})

const app = express()

app.use(express.json()); //allows the client to send and reciece data in json format

app.use(cookieParser());

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter);

app.listen(3000, () => {
    console.log('Server listening at port 3000.')
});

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});