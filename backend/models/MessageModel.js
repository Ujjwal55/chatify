import mongoose from "mongoose"

const MessageSchema = mongoose.Schema({
    chatId: {
        type: String,
    },
    senderId: {
        type: String,
        required: true,
    },
    text: {
        type: String,
    },
},
    {
        timestamps: true
    }
)

const MessageModel = mongoose.model("Message", MessageSchema)

export default MessageModel