import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
dotenv.config()
import { UserRouter } from './routes/user.js'





const app = express()
app.use(express.json())
app.use(cors({
    origin: ["https://mernloginfrontend.netlify.app/"],
    credentials: true
}))
app.use(cookieParser())
app.use('/auth', UserRouter)

mongoose.connect('mongodb+srv://kiksymyguy:Michealanike123@cluster0.78vjdgj.mongodb.net/authentication')


app.listen(process.env.PORT, () => {
    console.log("Server is Running")
})