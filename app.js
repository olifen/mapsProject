const express  = require('express');
const morgan   = require('morgan');
const mongoose = require('mongoose');
const port     = process.env.PORT || 8000;
const router   = require('./config/routes');
const bodyParser = require('body-parser');

const app = express();
mongoose.connect('mongodb://localhost/mapsProject', { useNewUrlParser: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', router);

app.listen(port, () => { console.log("hello");});
