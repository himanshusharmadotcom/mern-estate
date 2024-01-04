import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
dotenv.config(); //initialize the dotenv

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to MongoDB!');
}).catch((err) => {
    console.log(err)
})

const app = express()

app.use(express.json()); //allows the client to send and reciece data in json format

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter);

app.listen(3000, () => {
    console.log('Server listening at port 3000.')
});