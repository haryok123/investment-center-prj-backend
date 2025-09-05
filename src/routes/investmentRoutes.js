const express = require('express');

const investmentRouter = express.Router();

investmentRouter.get('/', (req, res) => {

});

investmentRouter.post('/', (req, res) => {

});

investmentRouter.patch('/:id', (req, res) => {
    res.send('clientRouter.patch works');
});

investmentRouter.delete('/:id', (req, res) => {
    res.send('clientRouter.get works');
});

module.exports = investmentRouter;