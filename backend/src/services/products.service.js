const { productsModel } = require('../models');

const findAll = async () => {
  const data = await productsModel.findAll();

  return { status: 200, data };
};

const findById = async (id) => {
  let status = 200;

  let data = await productsModel.findById(id);

  if (!data) {
    status = 404;
    data = { message: 'Product not found' };
  }

  return { status, data };
};

module.exports = {
  findAll,
  findById,
};
