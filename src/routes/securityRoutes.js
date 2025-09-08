const express = require('express');
const securityController = require('../controllers/securityController');

const securityRouter = express.Router();


securityRouter.get('/',  securityController.getSecurities);

securityRouter.post('/', securityController.createSecurity);

securityRouter.get('/:id', securityController.getSecurityByCode);

securityRouter.put('/:id', securityController.updateSecurity);

securityRouter.delete('/:id', securityController.deleteSecurity);

module.exports = securityRouter;