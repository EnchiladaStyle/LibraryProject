const express = require('express');
const bookRoute = require('./routes/bookRoute');
const bodyParser = require('body-parser');
const authorRoute = require('./routes/authorRoute');
const genreRoute = require('./routes/genreRoute');
const infoRoute = require('./routes/infoRoute');


const app = express();

app.use(bodyParser.json());
app.use('/book', bookRoute);
app.use('/author', authorRoute);
app.use('/genre', genreRoute);
app.use('/info', infoRoute);






module.exports = app;