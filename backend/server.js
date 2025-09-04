import app from "./src/app.js";
import dotenv from "dotenv";
import connectDB from "./src/db/db.js";
import express from 'express'
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(process.env.PORT,async ()=>{
    console.log('app running on given port');
    await connectDB()
    
})