const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

const { salesMock } = require('../../mocks');

const connection = require('../../../src/models/connection');
const { salesModel } = require('../../../src/models');

describe('Test sales model', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('The request return all sales', async function () {
    sinon.stub(connection, 'execute').resolves(salesMock.allSalesData);

    const response = await salesModel.findAll();

    expect(response).to.be.an('array');
    expect(response).to.be.deep.equal(salesMock.allSalesRes);
  });

  it('The request return one sale by id', async function () {
    sinon.stub(connection, 'execute').resolves(salesMock.saleIdData);

    const response = await salesModel.findById(1);

    expect(response).to.be.an('array');
    expect(response).to.be.deep.equal(salesMock.saleIdRes);
  });
});
