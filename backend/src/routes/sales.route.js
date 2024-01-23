const route = require('express').Router();
const bodyParser = require('body-parser');

const { salesController } = require('../controllers');
const { salesMiddleware } = require('../middlewares');

// GET
route.get('/', salesController.findAll);
route.get('/:id', salesController.findById);

// POST
route.post('/', bodyParser.json(), salesMiddleware, salesController.add);

module.exports = route;
