require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const routes = require('./api').default;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes())
app.use('/', (req, res) => {
    res.send('alive');
});

app.listen(3000);
