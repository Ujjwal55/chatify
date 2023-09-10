import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

MONGO_URL = process.env.MONGO_URL || "localhost:27017";

mongoose.connect(process.env.MONGO_URL, {})