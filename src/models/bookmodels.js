const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    publication_date: { type: Date, required: true },
    ISBN: { type: String, required: true },
    summary: { type: String },
    edition: { type: Number, required: true },
    availability: { type: String, enum: ["available", "checked out"], default: "available" }
});

module.exports = mongoose.model("Book", bookSchema);
