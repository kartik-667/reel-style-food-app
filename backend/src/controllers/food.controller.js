import foodModel from "../models/food.model.js";

const createFood=async (req,res)=>{
    try {
        
    } catch (error) {
        console.log(error);
         return res.status(500).json({
            message:'Internal server error'
        })

        
        
    }
}

export {createFood}