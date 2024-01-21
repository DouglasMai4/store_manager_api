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

  it('The request can add one product', async function () {
    sinon.stub(connection, 'execute')
      .onFirstCall()
      .resolves(productsMock.addProduct)
      .onSecondCall()
      .resolves([[{ id: 4, name: 'Calção do Hulk' }]]);

    const response = await productsModel.add('Calção do Hulk');

    expect(response).to.be.an('object');
    expect(response).to.deep.equal({ id: 4, name: 'Calção do Hulk' });
  });

  it('The request can update one product', async function () {
    sinon.stub(connection, 'execute')
      .onFirstCall()
      .resolves([[]])
      .onSecondCall()
      .resolves([[{ id: 1, name: 'StormBreaker' }]]);

    const response = await productsModel.update(1, 'StormBreaker');

    expect(response).to.be.an('object');
    expect(response).to.be.deep.equal({ id: 1, name: 'StormBreaker' });
  });

  it('The request can verify if a product exists', async function () {
    sinon.stub(connection, 'execute').resolves(productsMock.productIdData);

    const response = await productsModel.verify(1);

    expect(response).to.be.an('boolean');
    expect(response).to.be.equal(true);
  });

  it('The request return false if product dosent exists', async function () {
    sinon.stub(connection, 'execute').resolves([[]]);

    const response = await productsModel.verify(10);

    expect(response).to.be.an('boolean');
    expect(response).to.be.equal(false);
  });
});
