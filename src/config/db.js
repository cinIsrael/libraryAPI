require("dotenv").config(); // Load environment variables
const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/libraryDB"; // Use local DB if not set

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
           
        });
        console.log(" MongoDB Connected Successfully");
    } catch (error) {
        console.error(" Connection Failed:", error.message);
        process.exit(1); // Exit if connection fails
    }
};

module.exports = connectDB;