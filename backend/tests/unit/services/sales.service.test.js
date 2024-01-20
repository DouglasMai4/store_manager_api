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

  it('The service return one product by id with the correct status code', async function () {
    sinon.stub(salesModel, 'findById').resolves(salesMock.saleIdRes);

    const { status, data } = await salesService.findById(1);

    expect(status).to.be.an('number');
    expect(status).to.be.equal(200);
    expect(data).to.be.an('array');
    expect(data).to.be.deep.equal(salesMock.saleIdRes);
  });
});
