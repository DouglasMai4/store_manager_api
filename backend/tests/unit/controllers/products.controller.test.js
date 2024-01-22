const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

chai.use(sinonChai);

const { expect } = chai;

const { productsController } = require('../../../src/controllers');
const { productsService } = require('../../../src/services');

const { productsMock } = require('../../mocks');

describe('Test products controller', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('Test if the controller can get all products', async function () {
    sinon.stub(productsService, 'findAll').resolves({ status: 200, data: productsMock.allProductsRes });

    const req = { params: {}, body: {} };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productsController.findAll(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productsMock.allProductsRes);
  });

  it('Test if the controller can get one product by id', async function () {
    sinon.stub(productsService, 'findById').resolves({ status: 200, data: productsMock.productIdRes });

    const req = { params: { id: 1 }, body: {} };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productsController.findById(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(productsMock.productIdRes);
  });

  it('Test if the controller return error if no one product is finded', async function () {
    sinon.stub(productsService, 'findById').resolves({ status: 404, data: { message: 'Product not found' } });

    const req = { params: { id: 10 }, body: {} };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productsController.findById(req, res);

    expect(res.status).to.have.been.calledWith(404);
    expect(res.json).to.have.been.calledWith({ message: 'Product not found' });
  });

  it('Test if the controller can add a product', async function () {
    sinon.stub(productsService, 'add').resolves({ status: 201, data: { id: 4, name: 'Calção do Hulk' } });

    const req = { params: {}, body: { name: 'Calção do Hulk' } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productsController.add(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith({ id: 4, name: 'Calção do Hulk' });
  });

  it('Test if the controller can update a product', async function () {
    sinon.stub(productsService, 'update').resolves({ status: 200, data: { id: 1, name: 'StormBreaker' } });

    const req = { params: { id: 10 }, body: { name: 'StormBreaker' } };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    await productsController.update(req, res);

    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith({ id: 1, name: 'StormBreaker' });
  });
});
