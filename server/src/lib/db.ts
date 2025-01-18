import mongoose from "mongoose";
import { MONGO_URI } from "./env.config";

mongoose.connect(MONGO_URI).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error(error);
});