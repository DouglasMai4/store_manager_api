const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chai = require('chai');

const { productsMiddleware } = require('../../../src/middlewares');

chai.use(sinonChai);
const { expect } = chai;

describe('Test products middleware', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('O middleware chama a função next se o nome for válido', async function () {
    const req = { body: { name: 'Calção do Hulk' } };
    const res = {};
    const next = sinon.stub().returns();

    productsMiddleware.nameVerify(req, res, next);

    expect(next).to.have.been.calledWith();
  });

  it('Deve retornar um erro 400 se o nome não for fornecido', async function () {
    const req = { body: {} };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    const next = sinon.stub().returns();

    productsMiddleware.nameVerify(req, res, next);

    expect(res.status).to.have.been.calledWith(400);
    expect(res.json).to.have.been.calledWith({ message: '"name" is required' });
    expect(next).not.to.have.been.calledWith();
  });

  it('Deve retornar um erro 422 se o nome tiver menos de 5 caracteres', async function () {
    const req = { body: { name: 'Hulk' } };
    const res = { status: sinon.stub().returnsThis(), json: sinon.stub() };
    const next = sinon.stub().returns();

    productsMiddleware.nameVerify(req, res, next);

    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith({ message: '"name" length must be at least 5 characters long' });
    expect(next).not.to.have.been.calledWith();
  });
});
