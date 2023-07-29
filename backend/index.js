import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";

import ChatRoute from  "./routes/ChatRoute.js"
import MessageRoute from "./routes/MessageRoute.js"
import UserRoute from "./routes/UserRoute.js"

const app = express();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(process.env.PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})

mongoose.connect("mongodb+srv://agarwalujjwal698:H0Cq54ZqPDSuKitL@cluster0.flgv5h1.mongodb.net/?retryWrites=true&w=majority", {})

app.use("/users", UserRoute)
app.use("/chat", ChatRoute)
app.use("/message", MessageRoute)