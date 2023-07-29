import express from 'express';
import { createChat, findChat, userChats } from '../controllers/ChatController.js';
import { auth } from '../Middlewares/auth.js';

const router = express.Router();

router.post("/", auth, createChat)
router.get("/:userId", auth, userChats)
router.get("/find/:firstId/:secondId", auth, findChat)

export default router;