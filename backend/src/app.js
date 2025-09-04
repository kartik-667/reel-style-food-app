import express from "express";
const app=express()
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.get('/',(req,res)=>{
    res.json({
        message:'test route'
    })
})

app.use('/api/auth',authRouter)

export default app




