import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDB = async()=>{
    await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
    .then(()=>console.log("MONGO DB connected!!"))
    .catch((error) => console.log("MONGO DB connection failure:", error.message));

}