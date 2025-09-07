const express = require('express');

const depositRouter = express.Router();

depositRouter.get('/', (req, res) => {

});

depositRouter.post('/', (req, res) => {

});

depositRouter.patch('/:id', (req, res) => {
    res.send('depositRouter.patch works');
});

depositRouter.delete('/:id', (req, res) => {
    res.send('depositRouter.get works');
});

module.exports = depositRouter;