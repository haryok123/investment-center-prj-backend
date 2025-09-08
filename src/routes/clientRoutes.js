const express = require('express');
const clientController = require('../controllers/clientController');

const clientRouter = express.Router();

clientRouter.get('/',  clientController.getClients);

clientRouter.post('/', clientController.createClient);

clientRouter.get('/:id', clientController.getClientById);

clientRouter.put('/:id', clientController.updateClient);

clientRouter.delete('/:id', clientController.deleteClient);

module.exports = clientRouter;