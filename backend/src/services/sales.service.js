const { salesModel } = require('../models');

const findAll = async () => {
  const data = await salesModel.findAll();

  return { status: 200, data };
};

const findById = async (id) => {
  let status = 200;
  let data = await salesModel.findById(id);

  if (!data.length) {
    status = 404;
    data = { message: 'Sale not found' };
  }

  return { status, data };
};

const add = async (products) => {
  const data = await salesModel.add(products);

  return { status: 201, data };
};

module.exports = {
  findAll,
  findById,
  add,
};
