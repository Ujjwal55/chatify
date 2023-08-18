import mongoose from "mongoose";

    const UserSchema = mongoose.Schema({
        username: {
            type: String,
            required: true,
            unique: [true, "Can't be blank"],
            min: 3,
            max: 20,
        },
        email: {
            type: String,
            lowerCase: true,
            required: [true, "Can't be blank"],
            unique: true,
            max: 50,
            index: true,
        },
        password: {
            type: String,
            required: [true, "Can't be blank"],
            min: 6,
        },
        profilePicture: {
            type: String,
            default: "",
        },
        newMessages: {
            type: Object,
            default: {},
        },
        status: {
            type: String,
            default: "offline",
        },
    }, {
        minimize: false,
    })

const UserModel = mongoose.model("User", UserSchema)
export default UserModel;