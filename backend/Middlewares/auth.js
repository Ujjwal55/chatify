import jwt from 'jsonwebtoken';
import { verifyToken } from '../utils/jwtUtil.js';

export const auth = async (req, res, next) => {
    const token = req.header("Authorization");
    if(!token){
        return res.status(401).json({ message: "Unauthorized: Missing token" })
    }
    try{
        const decoded = verifyToken(token);
        req.userId = decoded.userId;
        next();
    } catch(error){
        return res.status(401).json({ message: "Unauthorized: Invalid token" })
    }
}