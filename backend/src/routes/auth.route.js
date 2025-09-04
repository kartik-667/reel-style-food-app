import express from "express";
import { registerUser } from "../controllers/auth.controller.js";
const authRouter=express.Router()

authRouter.post('/user/register',registerUser)



export default authRouter