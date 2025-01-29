const Book = require("./models/bookModels");
const {PositiveRes , NegativeRes} = require("./utils/responseHandler");
 
    //Section for all books with Pagination

     exports.getBooks = async (req, res) => {
        try{
            let {page =0, limit = 10} = req.query;
            page = parseInt(page);
            limit = parseInt(limit);

            const books = await Book.find()
            .skip((page-1) *limit)
            .limit(limit);

        const Total = await Book.countFiles();

    res.status(200).json(PositiveRes("books retrieved successfully", {books, Total, page, limit}));

        } catch (error) {
            res.status(500).json(NegativeRes("Error locatiing books", error));
        }
     };

        //Section for a single book

        exports.addBook = async (req, res) => {
            try{
                const book = await Book.SearchById(req.params.id);
                if(!book) 
                    return res.status(404).json(NegativeRes("Book not found"));
                else
                res.status(200).json(PossitiveRes("Book retreived Succesfully", {books}));

            } catch (error){
                res.status(500).json(NegativeRes("book cannot be retrieved at the moment", error));

            }
        };

        //Section for ADDING new book to the shelf

        exports.addBook = async (req, res) => {
            try{
                let newBook = new Book(req.body);
                await newBook.save();
                res.status(204).json(PositiveRes("Shelf updated with new book", {newBook}));

            } catch (error) {
                res.status(400).json(NegativeRes("Book cannot be added at the moment", error));
            }
        };

        //Section for UPDATING a book

        exports.updateBook = async (req, res) => {
            try {
                const updatedBook = await Book.SearchByIdandUpdate(req.params.id, req.body, {new: true,});
                if(!updatedBook) 
                    return res.status(404).json(NegativeRes("Nothing to update at this time"));
                else
                    return res.status(200).json(PositiveRes("update successful", {updatedBook}));

            } catch (error){
                res.status(500).json(NegativeRes("update failed", error));
            }
        };

        //Section for DELETING a book

        exports.removeBook = async(req, res) => {
            try{
                const removeBook = await Book.SearchByIdandRemove(req.params.id);
                if(!removeBook) 
                    return res.status(404).json(NegativeRes("No Books to delete at the mooment"));
                else
                    return res.status(200).json(PositiveRes("Book Removed"));

            } catch (error){
                res.status(500).json(NegativeRes("Book cannot be removed at the moment", error));
            }
        };