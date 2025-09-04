
import userModel from "../models/user.model.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const registerUser=async (req,res)=>{
    try {
        const {name,email,password}=req.body

        if(!name || !email || !password){
            return res.status(400).json({
                msg:"all fields are required"
            })
        }

        const userexists=await userModel.findOne({email})
        if(userexists){
            return res.status(400).json({
                msg:"user already exists"
            })

        }

        const newuser=await userModel.create({
            name,email,password
        })

        if(newuser){
            const token=jwt.sign({userid:newuser._id},process.env.JWT_SECRET) 
            res.cookie("token",token,{
                httpOnly:true
            })
            
            return res.status(201).json({
                msg:"user created successfully",
                id:newuser._id,
                email:newuser.email
            })


        }

        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:'Internal server error'
        })
        
        
    }
}

const loginUser=async (req,res)=>{
    try {
        const {email,password}=req.body

        const user=await userModel.findOne({email})
        if(!user){
            return res.status(400).json({
                msg:"invalid email or password"
            })
        }

        const checkpass=await bcrypt.compare(password,user.password)
        if(checkpass){
            const token=jwt.sign({userid:user._id},process.env.JWT_SECRET) 
            res.cookie("token",token,{
                httpOnly:true
            })

            return res.status(200).json({
                msg:"login successful"
            })
        }else{
            return res.status(400).json({
                msg:"invalid email or password"
            })

        }
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:'Internal server error'
        })
        
    }
}

const logoutUser=async (req,res)=>{
    try {
        res.clearCookie('token',{
            httpOnly:true
        })

        return res.status(200).json({ message: "Logged out successfully" });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:'Internal server error'
        })
        
    }
}

export {registerUser, loginUser, logoutUser}