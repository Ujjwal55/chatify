import ChatModel from "../models/ChatModel.js";

export const createChat = async (req, res) => {
    const { receiverId } = req.body;
    const senderId = req.userId;

    const newChat = new ChatModel({
        members: [senderId, receiverId]
    });
    console.log(newChat);
    try{
        console.log("inside try")
        const result = await newChat.save();
        console.log("result", result)
        res.status(200).json(result);
    } catch(error){
        res.status(500).json(error);
    }
}

export const userChats = async (req, res) => {
    try {
        const userId = req.userId;
        const chats = await ChatModel.find({
            members: { $in: [userId] }
        })
        res.status(200).json(chats);
    } catch(error){
        res.status(500).json(error);
    }
}


// this isn't good because mongoose query operator is generally fast
// export const userChats = async (req, res) => {
//     try{
//         const allChats = await ChatModel.find();
//         const userId = req.params.userId;

//         const userChats = allChats.filter(chat => chat.members.includes(userId));
//         res.status(200).json(userChats)

//     } catch(error){
//         res.status(500).json(error)
//     }
// }

export const findChat = async (req, res) => {
    try {
        const chat = await ChatModel.findOne({
            members: {$all: [req.params.firstId, req.params.secondId]}
        })
        res.status(200).json(chat);
    } catch(error){
        res.status(500).json(error);
    }
}


// export const findChat = async(req, res) => {
//     try{
//         const allChats = await ChatModel.find();
//         const chats = allChats.filter(item => chat.members.includes(req.params.firstId) && chat.members.includes(req.params.secondId)) 
//     } catch(error){
//         res.status(500).json(error)
//     }
// }
