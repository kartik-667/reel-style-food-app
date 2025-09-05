import foodpartnerModel from "../models/foodpartner.model.js";
import jwt from 'jsonwebtoken'


const authenticate=async (req,res,next)=>{
    try {
        const token=res.cookies.token
        

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

export {authenticate}