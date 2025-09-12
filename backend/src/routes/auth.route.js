import express from "express";
import { checkSignIn, loginFoodpartner, loginUser, logoutUser, registerFoodpartner, registerUser } from "../controllers/auth.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
const authRouter=express.Router()

authRouter.post('/user/register',registerUser)

authRouter.post('/user/login',loginUser)

authRouter.post('/user/logout',logoutUser)

authRouter.post('/user/checksignin',authenticate,checkSignIn)

authRouter.post('/foodpartner/register',registerFoodpartner)

authRouter.post('/foodpartner/login',loginFoodpartner)



export default authRouter