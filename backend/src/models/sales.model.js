// const camelize = require('camelize');

const connection = require('./connection');

async function findAll() {
  const [sales] = await connection.execute(`SELECT
      sales.id AS saleId,
      sales.date,
      products.product_id as productId,
      products.quantity
    FROM sales
    INNER JOIN sales_products as products
    ON products.sale_id = sales.id
  ORDER BY sale_id, product_id`);

  return sales;
}

async function findById(id) {
  const [sale] = await connection.execute(`SELECT
      sales.date,
      products.product_id as productId,
      products.quantity
    FROM sales
    INNER JOIN sales_products as products
    ON products.sale_id = sales.id
    WHERE sales.id = ?
  ORDER BY sale_id, product_id`, [id]);

  return sale;
}

async function findSaleProducts(id) {
  const [products] = await connection.execute(
    `SELECT
      products.product_id AS productId,
      products.quantity
    FROM sales
    INNER JOIN sales_products AS products
    ON products.sale_id = sales.id
    WHERE sales.id = ?
    ORDER BY sale_id, product_id`,
    [id],
  );

  return products;
}

async function add(products) {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO sales (date) VALUES (DEFAULT)',
  );

  const addProducts = products.map((product) => (
    connection.execute(
      `INSERT INTO sales_products (sale_id, product_id, quantity)
        VALUES (?, ?, ?)`,
      [insertId, product.productId, product.quantity],
    )
  ));

  await Promise.all(addProducts);

  const saleProducts = await findSaleProducts(insertId);

  return { id: insertId, itemsSold: saleProducts };
}

module.exports = {
  findAll,
  findById,
  add,
};
