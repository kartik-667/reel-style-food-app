import app from "./src/app.js";
import dotenv from "dotenv";
import connectDB from "./src/db/db.js";
dotenv.config()



app.listen(process.env.PORT,async ()=>{
    console.log('app running on given port');
    await connectDB()
    
})