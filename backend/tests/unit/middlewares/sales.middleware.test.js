const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chai = require('chai');

const { salesMiddleware } = require('../../../src/middlewares');
const { productsModel } = require('../../../src/models');

chai.use(sinonChai);
const { expect } = chai;

describe('Test sales middleware', function () {
  beforeEach(function () {
    sinon.stub(productsModel, 'verify').resolves(true);
  });

  afterEach(function () {
    sinon.restore();
  });

  it('Test if sale middleware require productId', async function () {
    const req = { body: [{ quantity: 2 }] };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    const next = sinon.stub().returns();

    salesMiddleware(req, res, next);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: '"productId" is required' });
    expect(next).not.to.have.been.calledWith();
  });

  it('Test if sale middleware require product quantity', async function () {
    const req = { body: [{ productId: 1 }] };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    const next = sinon.stub().returns();

    salesMiddleware(req, res, next);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: '"quantity" is required' });
    expect(next).not.to.have.been.calledWith();
  });
});
