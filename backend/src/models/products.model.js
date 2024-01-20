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
  const [insertId] = connection.execute(
    'INSERT INTO products (name) VALUES (?)',
    [name],
  );

  console.log('Insert: ', insertId);

  // const product = await findById(insertId);

  return insertId; // product;
};

module.exports = {
  findAll,
  findById,
  add,
};
