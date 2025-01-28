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

        export default async (req, res) => { //note this line 
            try{
                const book = await Book.SearchById(req.params.id);
                if(!book) 
                    return res.status(404).json(NegativeRes("Book not found"));
                else
                res.status(200).json(PossitiveRes("Book retreived Succesfully", {books}));

            } catch (error){
                res.status(500).json(NegativeRes("book cannot be retrieved at the moment", error));

            }
        }