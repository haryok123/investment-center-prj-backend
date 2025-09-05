const express = require('express');

const clientRouter = express.Router();

clientRouter.get('/', (req, res) => {
    res.send('clientRouter.get works');
});

clientRouter.post('/', (req, res) => {

    res.send('clientRouter.post works');
});

clientRouter.patch('/:id', (req, res) => {
    res.send('clientRouter.patch works');
});

clientRouter.delete('/:id', (req, res) => {
    res.send('clientRouter.get works');
});

module.exports = clientRouter;