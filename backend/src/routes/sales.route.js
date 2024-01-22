const route = require('express').Router();
const bodyParser = require('body-parser');

const { salesController } = require('../controllers');

// GET
route.get('/', salesController.findAll);
route.get('/:id', salesController.findById);

// POST
route.post('/', bodyParser.json(), salesController.add);

module.exports = route;
