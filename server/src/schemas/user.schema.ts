import { model, Schema } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
    },
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: "user"
    }
}, {
    timestamps: true
});

const User = model("User", UserSchema);
export default User;