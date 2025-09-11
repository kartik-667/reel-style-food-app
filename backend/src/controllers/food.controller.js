import foodModel from "../models/food.model.js";
import foodpartnerModel from "../models/foodpartner.model.js";
import likeModel from "../models/like.model.js";
import saveModel from "../models/save.model.js";
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

const likeFood=async (req,res)=>{
    try {
        const {foodID}=req.body

        const userid=req.user.userid

        const fooditem=await foodModel.findOne({_id:foodID})
        
        const result=await likeModel.findOne({user:userid, food:foodID})

        if(result){
            //already liked, so dislike it 
            const response=await likeModel.deleteOne({user:userid, food:foodID})
            fooditem.likeCount-=1
            await fooditem.save()
            return res.status(200).json({
                msg:"food disliked by user",
                liked:false //for frontend works
            })
        }else{
            const newres=await likeModel.create({
                user:userid,
                food:foodID
            })
            fooditem.likeCount+=1
            await fooditem.save()
            return res.status(201).json({
                msg:"new like created",
                newres,
                liked:true
            })
        }

        
    } catch (error) {
         console.log(error);
         return res.status(500).json({
            message:'Internal server error'
        })
        
    }
}

const saveFood=async (req,res)=>{
    try {
        const {foodID}=req.body

        const userid=req.user.userid

        const savedItem=await saveModel.findOne({user:userid, food:foodID})
        if(savedItem){
            const result=await saveModel.deleteOne({user:userid, food:foodID})
            return res.status(200).json({
                msg:"food unsaved successfully",
                saved:false
            })
        }else{
            const result=await saveModel.create({
                user:userid,
                food:foodID
            })
            return res.status(200).json({
                msg:"food saved",
                saved:true,
                result
            })
        }
        
    } catch (error) {
         console.log(error);
         return res.status(500).json({
            message:'Internal server error'
        })
        
    }
}

const getSaveditems=async (req,res)=>{
    try {
        const userid=req.params.id

        const result=await saveModel.find({user:userid})
        if(result.length ===0){
            return res.status(400).json({
                msg:"no user/video found"
            })
        }

        const savedFoods=await Promise.all(result.map(async (ele)=>{
            const item=await foodModel.findOne({_id:ele.food})
            if(item){
                return item
            }else{
                return null
            }

        }))

        const filtered=savedFoods.filter((ele)=> ele!==null)
        console.log(filtered);
        

        return res.status(200).json({
            items:filtered
        })

        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:'Internal server error'
        })
        
    }
}

export {createFood, getFoodItems, getFoodbypartnerId, getFoodpartnerbyID, likeFood,saveFood, getSaveditems}