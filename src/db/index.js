import mongoose from "mongoose";
import { DB_NAME } from "../utils/contsants.js";

const connectDB = async () => {
  try {

    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n mongoDB connected !! ${connectionInstance.Connection.host}`
    );
  } catch (error) {

    console.log("mongoDb connection failed", error);
    process.exit(1);
    
  }
};

export default connectDB;
