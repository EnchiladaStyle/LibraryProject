const express = require('express');
const authorController = require('../controllers/author.controller');

const router = express.Router();

router.post('/addAuthor', authorController.addAuthor);

router.delete('/deleteAuthor', authorController.deleteAuthor);

module.exports = router; 