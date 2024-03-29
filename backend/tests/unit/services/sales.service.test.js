const chai = require('chai');
const sinon = require('sinon');

const { expect } = chai;

const { salesMock } = require('../../mocks');

const { salesService } = require('../../../src/services');
const { salesModel } = require('../../../src/models');

describe('Sales service test', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('The service return all sales with the correct status code', async function () {
    sinon.stub(salesModel, 'findAll').resolves(salesMock.allSalesRes);

    const { status, data } = await salesService.findAll();

    expect(status).to.be.an('number');
    expect(status).to.be.equal(200);
    expect(data).to.be.an('array');
    expect(data).to.be.deep.equal(salesMock.allSalesRes);
  });

  it('The service return one sale by id with the correct status code', async function () {
    sinon.stub(salesModel, 'findById').resolves(salesMock.saleIdRes);

    const { status, data } = await salesService.findById(1);

    expect(status).to.be.an('number');
    expect(status).to.be.equal(200);
    expect(data).to.be.an('array');
    expect(data).to.be.deep.equal(salesMock.saleIdRes);
  });

  it('The service return the correct status code if no one sale id find', async function () {
    sinon.stub(salesModel, 'findById').resolves([]);

    const { status, data } = await salesService.findById(10);

    expect(status).to.be.an('number');
    expect(status).to.be.equal(404);
    expect(data).to.be.an('object');
    expect(data).to.be.deep.equal({ message: 'Sale not found' });
  });

  it('The service return the correct status code when add a sale', async function () {
    sinon.stub(salesModel, 'add').resolves(salesMock.saleAdded);

    const { status, data } = await salesService.add([
      {
        productId: 1,
        quantity: 1,
      },
      {
        productId: 2,
        quantity: 5,
      },
    ]);

    expect(status).to.be.an('number');
    expect(status).to.be.equal(201);
    expect(data).to.be.an('object');
    expect(data).to.be.deep.equal(salesMock.saleAdded);
  });
});
