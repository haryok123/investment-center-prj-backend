const express = require('express');
const quotationController = require('../controllers/quotationController');

const quotationRouter = express.Router();

quotationRouter.get('/',  quotationController.getQuotations);

quotationRouter.post('/', quotationController.createQuotation);

module.exports = quotationRouter;

