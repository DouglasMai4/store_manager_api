const { productsModel } = require('../models');

function verifyProductId(id, res) {
  if (!id) {
    res.status(400).json({ message: '"productId" is required' });
    return false;
  }

  return true;
}

function verifyProductQuantity(quantity, res) {
  if (quantity === undefined) {
    res.status(400).json({ message: '"quantity" is required' });
    return false;
  }
  if (quantity <= 0) {
    res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
    return false;
  }
  return true;
}

async function verifyProductExistence(id, res) {
  const existence = await productsModel.verify(id);

  if (!existence) {
    res.status(404).json({ message: 'Product not found' });
    return false;
  }

  return true;
}

module.exports = async (req, res, next) => {
  const results = await Promise.all(req.body.map(async ({ productId, quantity }) => {
    if (!verifyProductId(productId, res)) return false;
    if (!verifyProductQuantity(quantity, res)) return false;
    return verifyProductExistence(productId, res);
  }));

  if (results.some((result) => result === false)) return;

  next();
};
