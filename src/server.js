'use strict';

//server logic applies here

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

function logger(request, response) {
    // This logs the {object} console.log(request.query);
    Request.message = 'Hello from logger'
}

app.get('/PERSON',  (request, response) => {
    response.send('You made it')
});

module.exports = app;