const chai = require('chai');
const simon = require('sinon');

const { expect } = chai;

const { productsMock } = require('../../mocks');

const { productsService } = require('../../../src/services');
const { productsModel } = require('../../../src/models');

describe('Products service test', function () {
  afterEach(function () {
    simon.restore();
  });

  it('The service return all products with the correct status code', async function () {
    simon.stub(productsModel, 'findAll').resolves(productsMock.allProductsRes);

    const { status, data } = await productsService.findAll();

    expect(status).to.be.an('number');
    expect(status).to.be.equal(200);
    expect(data).to.be.an('array');
    expect(data).to.be.deep.equal(productsMock.allProductsRes);
  });

  it('The service return one product by id with the correct status code', async function () {
    simon.stub(productsModel, 'findById').resolves(productsMock.productIdRes);

    const { status, data } = await productsService.findById(1);

    expect(status).to.be.an('number');
    expect(status).to.be.equal(200);
    expect(data).to.be.an('object');
    expect(data).to.be.deep.equal(productsMock.productIdRes);
  });

  it('The service return an error mensage and correct status code if the products dosnt exists', async function () {
    simon.stub(productsModel, 'findById').resolves([]);

    const { status, data } = await productsService.findById(5);

    expect(status).to.be.an('number');
    expect(status).to.be.equal(404);
    expect(data).to.be.an('object');
    expect(data).to.be.deep.equal({ message: 'Product not found' });
  });
});
