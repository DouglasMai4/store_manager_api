const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

const { productsMock } = require('../../mocks');

const { productsModel } = require('../../../src/models');
const connection = require('../../../src/models/connection');

describe('Products model test', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('The request return all products', async function () {
    sinon.stub(connection, 'execute').resolves(productsMock.allProductsData);

    const response = await productsModel.findAll();

    expect(response).to.be.an('array');
    expect(response).to.deep.equal(productsMock.allProductsRes);
  });

  it('The request return one product', async function () {
    sinon.stub(connection, 'execute').resolves(productsMock.productIdData);

    const response = await productsModel.findById(1);

    expect(response).to.be.an('object');
    expect(response).to.be.deep.equal(productsMock.productIdRes);
  });
});
