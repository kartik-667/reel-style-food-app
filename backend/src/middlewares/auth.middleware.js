import foodpartnerModel from "../models/foodpartner.model.js";
import jwt from 'jsonwebtoken'


const authenticate=async (req,res,next)=>{
    try {
        const token=req.cookies.token //access it using cookie-parser
        

        if(!token) return res.status(401).json({
            msg:"Unauthorised access"
        })

        try {
            const decoded=jwt.verify(token,process.env.JWT_SECRET)
            req.user=decoded //set the req.user to userid of our token
            next()

            
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                msg:"Invalid token "
            }
            )

            
            
        }



        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg:"internal server error"
        }
        )
        
        
    }

}

const foodpartnerAuthenticate=async (req,res,next)=>{
    try {
        const token=req.cookies.token
         if(!token) return res.status(401).json({
            msg:"Unauthorised access"
        })

        try {
            const decoded=jwt.verify(token,process.env.JWT_SECRET)
            console.log(decoded)
            //check whter food partner exist or not

            const found=await foodpartnerModel.find({_id:decoded.userid})
            if(found){
                req.user=decoded
                next()

            }else{
                return res.status(400).json({
                    msg:"Food partner invalid"
                })
            }


            
        } catch (error) {
            console.log('error parsing token');
             return res.status(500).json({
                msg:"Invalid token "
            })
            
        }
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg:"internal server error"
        }
        )
        
    }
}



export {authenticate, foodpartnerAuthenticate}