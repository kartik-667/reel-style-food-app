import foodModel from "../models/food.model.js";
import foodpartnerModel from "../models/foodpartner.model.js";
import { uploadVideo } from "../services/storage.service.js";
import {v4 as uuidv4} from 'uuid'


const createFood=async (req,res)=>{
    try {
        const foodpartner=req.user 
        // console.log(foodpartner);
        // console.log(req.body);
        const {name,description}=req.body
        const videofile=req.file.buffer

        //we are giving filename as uuid
        const uploadResult=await uploadVideo({file:videofile, filename:uuidv4()})

        console.log(uploadResult);

        const newfood=await foodModel.create({
            name,
            description,
            video:uploadResult.url,
            foodpartner:foodpartner.userid
        })


        return res.status(201).json({msg:"new food created", newfood})
        


        
        
    } catch (error) {
        console.log(error);
         return res.status(500).json({
            message:'Internal server error'
        })

        
        
    }
}

const getFoodItems=async (req,res)=>{
    try {
        const data=await foodModel.find()

        return res.status(200).json({
            data:data
        })

        
    } catch (error) {
        console.log(error);
         return res.status(500).json({
            message:'Internal server error'
        })
        
    }
}

//gets food by a particular foodpartner id
const getFoodbypartnerId=async (req,res)=>{
    const partnerID=req.params.id
    try {

        const resdata=await foodModel.find({foodpartner:partnerID})

        return res.status(200).json({
            data:resdata
        })
        
    } catch (error) {
        console.log(error);
         return res.status(500).json({
            message:'Internal server error'
        })
        
    }
}

const getFoodpartnerbyID=async (req,res)=>{
    const partnerID=req.params.pid
    try {

        const resdata=await foodpartnerModel.findOne({_id:partnerID})

        return res.status(200).json({
            partner:resdata
        })
        
    } catch (error) {
        console.log(error);
         return res.status(500).json({
            message:'Internal server error'
        })
        
    }
}

export {createFood, getFoodItems, getFoodbypartnerId, getFoodpartnerbyID}