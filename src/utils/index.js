import { configDotenv } from "dotenv";
import connectDB from "../db/index.js";

configDotenv({
    path:'./.env'
})

// dotenv.config({
//     path: './.env'
// })
console.log("utils index in running");
connectDB()



//second approch is in db file 
// FIRT APPROCH
// import express from "express";
// const app = express()

// ( async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

//         app.on("error",(error)=>{
//             console.log("Error",error)
//             throw error
//         })

//         app.listen(process.env.PORT, ()=>{
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })

//     }catch(error){
//         console.error("ERROR:",error)
//         throw err
//     }
// })()