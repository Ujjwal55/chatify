import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/UserModel.js';
import { generateToken } from '../utils/jwtUtil.js';

export const registerUser = async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    console.log("reeeeee", req.body)
    // Input validation
    if(!username || !email || !password){
        return res.status(400).json({ message: "All fields are required" })
    }
    try {
        const exisitingUser = await User.findOne({ $or: [{username}, {email}] });
        if(exisitingUser){
            return res.status(409).json({ message: "User already exists" })
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
        })
        const user = await newUser.save();
        const token = generateToken(user._id);
        res.status(201).json(user);
    }
    catch(error){
        return res.status(500).json(error.message);
    }
}

export const loginUser = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Input validation
    if(!username || !password){
        return res.status(400).json({ message: "All fields are required" })
    }
    try {
        const user = await User.findOne({ username });

        if(!user){
            return res.status(404).json({ message: "User not found" })
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if(!isPasswordCorrect){
            return res.status(400).json({ message: "Invalid credentials" })
        }
        const token = generateToken(user._id);
        res.status(200).json({ user, token });
    }
    catch(error){
        return res.status(500).json(error);
    }
}