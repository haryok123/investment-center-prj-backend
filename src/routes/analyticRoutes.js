const express = require('express');
const investmentController = require("../controllers/investmentController");

const analyticsRouter = express.Router();

analyticsRouter.get('/', investmentController.getInvestments);
analyticsRouter.post('/', investmentController.createInvestment);

module.exports = analyticsRouter;