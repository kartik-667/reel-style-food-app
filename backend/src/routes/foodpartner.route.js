import express from 'express'
import { getFoodbypartnerId, getFoodpartnerbyID } from '../controllers/food.controller.js'
const foodpartnerRouter=express.Router()


foodpartnerRouter.get('/:id',getFoodbypartnerId)

foodpartnerRouter.get('/id/:pid',getFoodpartnerbyID)

export default foodpartnerRouter