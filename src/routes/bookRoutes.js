const express = require("express");
const router = express.Router();
const bookControllers = require("../controllers/bookControllers");

const{getBooks, getBookById, addBook, updateBook, removeBook} = require("../controllers/bookControllers");

router.get("/getBooks", bookControllers.getBooks);
router.get("/getBooksbyId/:id", bookControllers.getBookById);
router.post("/addBook", bookControllers.addBook);
router.put("/updateBook/:id", bookControllers.updateBook);
router.delete("/removeBook/:id", bookControllers.removeBook);


module.exports = router;