const { salesService } = require('../services');

const findAll = async (_req, res) => {
  const { status, data } = await salesService.findAll();

  return res.status(status).json(data);
};

const findById = async (req, res) => {
  const { id } = req.params;

  const { status, data } = await salesService.findById(id);

  return res.status(status).json(data);
};

const add = async (req, res) => {
  const products = req.body;

  const { status, data } = await salesService.add(products);

  return res.status(status).json(data);
};

module.exports = {
  findAll,
  findById,
  add,
};
