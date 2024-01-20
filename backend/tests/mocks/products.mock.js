const allProductsData = [
  [
    { id: 1, name: 'Martelo do Thor' },
    { id: 2, name: 'Traje de encolhimento' },
    { id: 3, name: 'Escudo do Capitão América' },
  ],
];

const allProductsRes = [
  { id: 1, name: 'Martelo do Thor' },
  { id: 2, name: 'Traje de encolhimento' },
  { id: 3, name: 'Escudo do Capitão América' },
];

const productIdData = [[
  {
    id: 1,
    name: 'Martelo de Thor',
  },
]];

const productIdRes = {
  id: 1,
  name: 'Martelo de Thor',
};

const addProduct = [
  {
    fieldCount: 0,
    affectedRows: 1,
    insertId: 4,
    info: '',
    serverStatus: 2,
    warningStatus: 0,
  },
  undefined,
];

module.exports = {
  allProductsData,
  allProductsRes,
  productIdData,
  productIdRes,
  addProduct,
};
