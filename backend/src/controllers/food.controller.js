import foodModel from "../models/food.model.js";

const createFood=async (req,res)=>{
    try {
        const foodpartner=req.user 
        console.log(foodpartner);
        console.log(req.body);
        

        return res.json({msg:"works"})
        
        
    } catch (error) {
        console.log(error);
         return res.status(500).json({
            message:'Internal server error'
        })

        
        
    }
}

export {createFood}