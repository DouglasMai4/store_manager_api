const { verify } = require('../models/products.model');

const nameVerify = (req, res, next) => {
  const { name } = req.body;

  if (name) {
    if (name.length >= 5) {
      next();
    } else {
      return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
    }
  }

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
};

const productVerify = async (req, res, next) => {
  const { id } = req.params;

  const product = await verify(id);

  if (product) {
    next();
  } else {
    return res.status(404).json({ message: 'Product not found' });
  }
};

module.exports = {
  nameVerify,
  productVerify,
};
