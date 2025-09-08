import express from "express";
import { authenticate } from "../middlewares/auth.middleware.js";
import { createFood, getFoodItems } from "../controllers/food.controller.js";
import multer from 'multer' //as express cant read any file by default so we use this
const foodRouter=express.Router()


const upload=multer({
    storage:multer.memoryStorage()
})


foodRouter.get('/test',(req,res)=>{
    res.status(200).json({
        msg:"test route for food"
    })
})

foodRouter.post('/',authenticate, upload.single("video"),createFood)

//api to get all food items
// foodRouter.get('/',authenticate,getFoodItems)
foodRouter.get('/',getFoodItems)


export default foodRouter