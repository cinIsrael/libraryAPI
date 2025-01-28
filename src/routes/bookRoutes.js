const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookControllers');

     router.get('/', bookControllers.getBooks);
     router.get('/', bookControllers.SearchById);
     router.post('/', bookControllers.addBook);
     router.put('/', bookControllers.updateBook);
     router.delete('/', bookControllers.removeBook);

module.exports = router;