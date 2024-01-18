const route = require('express').Router();

const { salesController } = require('../controllers');

// GET
route.get('/', salesController.findAll);
route.get('/:id', salesController.findById);

module.exports = route;
