import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";

import ChatRoute from  "./routes/ChatRoute.js"
import MessageRoute from "./routes/MessageRoute.js"

const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(process.env.PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})

console.log("proc", process.env.MONGO_URL)

mongoose.connect(process.env.MONGO_URL, {})

app.use("/chat", ChatRoute)
app.use("/message", MessageRoute)