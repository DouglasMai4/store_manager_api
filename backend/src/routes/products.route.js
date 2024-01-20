const route = require('express').Router();
const bodyParser = require('body-parser');

const { productsController } = require('../controllers');

// GET
route.get('/', productsController.findAll);
route.get('/:id', productsController.findById);

// POST
route.post('/', bodyParser.json(), productsController.add);

module.exports = route;
