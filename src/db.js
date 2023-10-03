import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Conectado a MongoDB");
    } catch (error) {
        console.error(error);
    }
};