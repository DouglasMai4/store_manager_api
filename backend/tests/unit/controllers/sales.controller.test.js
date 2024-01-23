const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const { expect } = chai;

const { salesController } = require('../../../src/controllers');
const { salesService } = require('../../../src/services');

const { salesMock } = require('../../mocks');

describe('Test sales controller', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Test if the controller can get all sales', async function () {
    sinon.stub(salesService, 'findAll').resolves({ status: 200, data: salesMock.allSalesRes });

    const req = { params: {}, body: {} };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await salesController.findAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(salesMock.allSalesRes);
  });

  it('Test if the controller can get on sale by id', async function () {
    sinon.stub(salesService, 'findById').resolves({ status: 200, data: salesMock.saleIdRes });

    const req = { params: {}, body: {} };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await salesController.findById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(salesMock.saleIdRes);
  });

  it('Test if the controller can add one sale', async function () {
    const reqBody = [
      { productId: 1, quantity: 1 },
      { productId: 2, quantity: 5 },
    ];

    sinon.stub(salesService, 'add').resolves({ status: 201, data: salesMock.saleAdded });

    const req = { params: {}, body: reqBody };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await salesController.add(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(salesMock.saleAdded);
  });
});
