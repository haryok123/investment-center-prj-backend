const express = require('express');

const depositRouter = express.Router();

depositRouter.get('/', (req, res) => {

});

depositRouter.post('/', (req, res) => {

});

depositRouter.patch('/:id', (req, res) => {
    res.send('clientRouter.patch works');
});

depositRouter.delete('/:id', (req, res) => {
    res.send('clientRouter.get works');
});

module.exports = depositRouter;