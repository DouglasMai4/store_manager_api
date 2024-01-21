const route = require('express').Router();
const bodyParser = require('body-parser');

const { productsController } = require('../controllers');
const { productsMiddleware } = require('../middlewares');

// GET
route.get('/', productsController.findAll);
route.get('/:id', productsController.findById);

// POST
route.post('/', bodyParser.json(), productsMiddleware.nameVerify, productsController.add);

// PUT
route.put(
  '/:id',
  bodyParser.json(),
  productsMiddleware.nameVerify,
  productsMiddleware.productVerify,
  productsController.update,
);

module.exports = route;
