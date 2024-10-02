import mongoose from "mongoose";

const connectToDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to DB -> ", connection.connection.host);
    } catch (error) {
        console.log("Error connecting DB -", error);
        process.exit(1);
    }
}

export default connectToDB;