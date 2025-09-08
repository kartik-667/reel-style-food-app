import express from "express";
const app=express()
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import foodRouter from "./routes/food.route.js";
import cors from 'cors'

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
    
}))

app.get('/',(req,res)=>{
    res.json({
        message:'test route'
    })
})

app.use('/api/auth',authRouter)
app.use('/api/food',foodRouter)

export default app




