const { productsService } = require('../services');

const findAll = async (_req, res) => {
  const { status, data } = await productsService.findAll();

  return res.status(status).json(data);
};

const findById = async (req, res) => {
  const { id } = req.params;

  const { status, data } = await productsService.findById(id);

  return res.status(status).json(data);
};

const add = async (req, res) => {
  const { name } = req.body;

  const { status, data } = await productsService.add(name);

  return res.status(status).json(data);
};

const update = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const { status, data } = await productsService.update(id, name);

  return res.status(status).json(data);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  const status = await productsService.deleteProduct(id);

  return res.status(status).json({});
};

module.exports = {
  findAll,
  findById,
  add,
  update,
  deleteProduct,
};
