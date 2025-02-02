const Book = require("../models/bookmodels");
const { PositiveRes, NegativeRes } = require("../utils/responseHandler");

// Get All Books with Pagination
exports.getBooks = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const books = await Book.find().skip(skip).limit(limit);
        const total = await Book.countDocuments();

        res.status(200).json(PositiveRes("Books retrieved successfully", {
            books,
            pagination: {
                current_page: page,
                per_page: limit,
                total_pages: Math.ceil(total / limit),
                total_books: total
            }
        }));
    } catch (error) {
        res.status(500).json(NegativeRes("Error fetching books", error.message));
    }
};

// Get a Book by ID
exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json(NegativeRes("Book not found"));
        }
        res.status(200).json(PositiveRes("Book retrieved successfully", book));
    } catch (error) {
        res.status(500).json(NegativeRes("Error fetching book", error.message));
    }
};

// Add a New Book
exports.addBook = async (req, res) => {
    try {
        const { title, author, genre, publication_date, ISBN, summary, edition } = req.body;

        if (!title || !author || !genre || !publication_date || !ISBN || !edition) {
            return res.status(400).json(NegativeRes("Missing required fields"));
        }

        const newBook = new Book({
            title,
            author,
            genre,
            publication_date,
            ISBN,
            summary,
            edition,
            availability: "available"
        });

        await newBook.save();
        res.status(201).json(PositiveRes("Book added successfully", newBook));
    } catch (error) {
        res.status(500).json(NegativeRes("Error adding book", error.message));
    }
};

// Update a Book
exports.updateBook = async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedBook) {
            return res.status(404).json(NegativeRes("Book not found"));
        }
        res.status(200).json(PositiveRes("Book updated successfully", updatedBook));
    } catch (error) {
        res.status(500).json(NegativeRes("Error updating book", error.message));
    }
};

// Remove a Book
exports.removeBook = async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook) {
            return res.status(404).json(NegativeRes("Book not found"));
        }
        res.status(200).json(PositiveRes("Book deleted successfully"));
    } catch (error) {
        res.status(500).json(NegativeRes("Error deleting book", error.message));
    }
};