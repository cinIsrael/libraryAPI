const mongoose = require("mongosoe");
const dotenv = require("dotenv");

const connectDB = async () => {
    try{
        await mongoose.connect(process.allowedNodeEnvironmentFlags.MONGO_URI, {useNewUrlParser : true, useunifiedTopology: true});
        console.log("MongoDB connected successfully");
    } catch(erroe) {
        console.error("MongoDB Connection Error", error);
        process.exit(1);
    }
};

    export default connectDB;