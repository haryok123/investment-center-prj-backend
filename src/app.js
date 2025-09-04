const express = require('express');
const connectDB = require('../src/config/db');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})