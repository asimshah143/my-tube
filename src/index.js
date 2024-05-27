import { configDotenv } from "dotenv";
import connectDB from "./db/index.js";
import express from "express";

const app = express();

configDotenv({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000),
      () => {
        console.log(`server is running on PORT ${process.env.PORT}`);
      };
  })
  .catch((err) => {
    console.log("mongoDB connection is failed", err);
  });

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
