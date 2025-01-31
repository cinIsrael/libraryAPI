const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    Name: { type: String, required: true }, 
    Author: { type: String, required: true }, 
    barcode: { type: Number, required: true },  
    foreword: { type: String, required: false },  
    publication: { type: Number, required: true }, 
    Acknowledgement: { type: String, required: true },  
    ISBN: { type: Number, required: true },  
    summary: { type: String },  // 
    availability: { type: String, enum: ["available", "checked out"], default: "available" }, 
    edition: { type: Number, required: true } 
});

module.exports = mongoose.model("Book", bookSchema);