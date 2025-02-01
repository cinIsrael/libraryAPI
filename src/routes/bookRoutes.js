const express = require("express");
const router = express.Router();
const bookControllers = require("../controllers/bookControllers");

router.get("/", bookControllers.getBooks);
router.get("/:id", bookControllers.getBookById);
router.post("/", bookControllers.addBook);
router.put("/:id", bookControllers.updateBook);
router.delete("/:id", bookControllers.removeBook);

module.exports = router;
