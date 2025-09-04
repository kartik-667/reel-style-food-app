import express from "express";
import { loginFoodpartner, loginUser, logoutUser, registerFoodpartner, registerUser } from "../controllers/auth.controller.js";
const authRouter=express.Router()

authRouter.post('/user/register',registerUser)

authRouter.post('/user/login',loginUser)

authRouter.post('/user/logout',logoutUser)

authRouter.post('/foodpartner/register',registerFoodpartner)

authRouter.post('/foodpartner/login',loginFoodpartner)



export default authRouter