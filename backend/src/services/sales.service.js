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

module.exports = {
  findAll,
  findById,
};
