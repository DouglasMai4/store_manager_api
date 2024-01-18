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

module.exports = {
  findAll,
  findById,
};
