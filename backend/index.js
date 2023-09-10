import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
// import socket from "socket.io";

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

mongoose.connect(process.env.MONGO_URL, {
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
})
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));
// const io = socket(app, {
//     cors: {
//         origin: process.env.CLIENT_URL,
//         credentials: true,
//     }
// })


app.use("/", UserRoute)
app.use("/chat", ChatRoute)
app.use("/message", MessageRoute)