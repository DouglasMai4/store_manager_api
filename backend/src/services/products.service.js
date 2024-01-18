const { productsModel } = require('../models');

const findAll = async () => {
  const data = await productsModel.findAll();
[
  { id: 1, name: 'Martelo do Thor' },
  { id: 2, name: 'Traje de encolhimento' },
  { id: 3, name: 'Escudo do Capitão América' },
]
  return { status: 200, data };
};

const findById = async (id) => {
  let status = 200;

  let data = await productsModel.findById(id);

  if (!data.length) {
    status = 404;
    data = { message: 'Product not found' };
  }

  return { status, data };
};

module.exports = {
  findAll,
  findById,
};
