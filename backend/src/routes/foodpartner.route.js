import express from 'express'
import { getFoodbypartnerId } from '../controllers/food.controller.js'
const foodpartnerRouter=express.Router()

foodpartnerRouter.get('/:id',getFoodbypartnerId)

export default foodpartnerRouter