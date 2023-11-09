const express = require('express');
const bookController = require('../controllers/book.controller');

const router = express.Router();

router.post('/addBook', bookController.addBook);

router.delete('/deleteBook', bookController.deleteBook);

module.exports = router; 