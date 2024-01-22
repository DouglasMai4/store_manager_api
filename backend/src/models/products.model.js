// const camelize = require('camelize');

const connection = require('./connection');

const findAll = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM products ORDER BY id',
  );

  return products;
};

const findById = async (id) => {
  const [product] = await connection.execute(
    'SELECT * FROM products WHERE id = ?',
    [id],
  );

  return product[0];
};

const add = async (name) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO products (name) VALUES (?)',
    [name],
  );

  const product = await findById(insertId);

  return product;
};

const update = async (id, name) => {
  await connection.execute(
    'UPDATE products SET name = ? WHERE id = ?',
    [name, id],
  );

  const product = await findById(id);

  return product;
};

const deleteProduct = async (id) => {
  await connection.execute(
    'DELETE FROM products WHERE id = ?',
    [id],
  );
};

const verify = async (id) => {
  const productFind = await findById(id);

  return !!productFind;
};

module.exports = {
  findAll,
  findById,
  add,
  update,
  verify,
  deleteProduct,
};
