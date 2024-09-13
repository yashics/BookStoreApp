import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./route/user.route.js";
import bookRoute from "./route/book.route.js" 
import cors from "cors"


const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT=process.env.PORT || 4000;
const url=process.env.MONGO_URI;
try {
  mongoose.connect(url);
  console.log("connect to mongodb")
} catch (error) {
  console.log("error:",error)
}

app.use("/book",bookRoute);
app.use("/user",userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})