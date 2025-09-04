import mongoose from "mongoose";
import bcrypt from 'bcrypt'
//this can add food items - only extra functionality apart from user
const foodpartnerSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        
    },

})


foodpartnerSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next()
    }
    const salt=await bcrypt.genSalt(10)
    this.password=await bcrypt.hash(this.password,salt)

    next()
})


const foodpartnerModel=mongoose.model('foodpartner',foodpartnerSchema)

export default foodpartnerModel