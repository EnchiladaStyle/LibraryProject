const express = require('express');
const genreController = require('../controllers/genre.controller');

const router = express.Router();

router.post('/addGenre', genreController.addGenre);

router.delete('/deleteGenre', genreController.deleteGenre);

module.exports = router; 