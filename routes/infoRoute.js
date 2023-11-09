const express = require('express');
const infoController = require('../controllers/info.controller');

const router = express.Router();

router.get('/getAllBooks', infoController.getAllBooks);
router.get('/searchByAuthorID', infoController.searchByAuthorID);
router.patch('/editBook', infoController.editBook);


module.exports = router; 