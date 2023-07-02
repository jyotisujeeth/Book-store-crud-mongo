require('dotenv').config();

const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const express = require('express');

const app = express();

//models
const Book = require('./server/models/book');

const db = 'mongodb://127.0.0.1:27017/example';
mongoose.connect(db);

app.use(cors());

app.use(bodyParser.json());

//routes


app.listen(process.env.PORT || 3000, () => {
    console.log('Server running');
});
