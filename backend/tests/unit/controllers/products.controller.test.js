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
});
