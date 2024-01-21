const { productsModel } = require('../models');

const findAll = async () => {
  const data = await productsModel.findAll();

  return { status: 200, data };
};

const findById = async (id) => {
  let status = 200;

  let data = await productsModel.findById(id);

  if (!data || !Object.keys(data).length) {
    status = 404;
    data = { message: 'Product not found' };
  }

  return { status, data };
};

const add = async (name) => {
  const data = await productsModel.add(name);

  return { status: 201, data };
};

const update = async (id, name) => {
  const data = await productsModel.update(id, name);

  return { status: 200, data };
};

module.exports = {
  findAll,
  findById,
  add,
  update,
};
