'use strict';

//entry point to run express app

const app = require('./src/server.js');
require('dotenv').config();
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log('App is running on port:', PORT)
})