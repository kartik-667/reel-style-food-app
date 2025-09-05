import express from "express";
import { authenticate } from "../middlewares/auth.middleware.js";
import { createFood } from "../controllers/food.controller.js";

const foodRouter=express.Router()

foodRouter.get('/test',(req,res)=>{
    res.status(200).json({
        msg:"test route for food"
    })
})

foodRouter.post('/',authenticate,createFood)


export default foodRouter