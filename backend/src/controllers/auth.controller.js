
import userModel from "../models/user.model.js";


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

        return res.status(201).json({
            msg:"user created successfully",
        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:'Internal server error'
        })
        
        
    }
}

export {registerUser}