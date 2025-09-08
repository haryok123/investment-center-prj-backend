const express = require('express');
const investmentController = require('../controllers/investmentController');

const investmentRouter = express.Router();

investmentRouter.get('/', investmentController.getInvestments);

investmentRouter.post('/', investmentController.createInvestment);

module.exports = investmentRouter;