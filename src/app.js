const express = require('express');
const connectDB = require('../src/config/db');

const clientRouter = require('./routes/clientRoutes');
const securityRouter = require('./routes/securityRoutes');
const investmentRouter = require('./routes/investmentRoutes');
const depositRouter = require('./routes/depositRoutes');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use('/clients', clientRouter);
app.use('/securities', securityRouter);
app.use('/investments', investmentRouter);
app.use('/deposits', depositRouter);

connectDB();

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})