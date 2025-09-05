const express = require('express');

const securityRouter = express.Router();

securityRouter.get('/', (req, res) => {

});

securityRouter.post('/', (req, res) => {

});

securityRouter.patch('/:id', (req, res) => {
    res.send('clientRouter.patch works');
});

securityRouter.delete('/:id', (req, res) => {
    res.send('clientRouter.get works');
});

module.exports = securityRouter;