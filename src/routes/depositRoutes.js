const express = require('express');
const  depositController = require('../controllers/depositController');

const depositRouter = express.Router();

depositRouter.get('/', depositController.getDeposits);

depositRouter.post('/', depositController.createDeposit);


module.exports = depositRouter;