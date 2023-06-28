import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { Request, Response } from 'express';
import productMock from '../../mocks/product.mock';
import { ServiceResponse } from '../../../src/types/ServiceResponse'
import { Product } from '../../../src/types/Product'
import productService from '../../../src/services/product.services'
import productController from '../../../src/controller/product.controller'

chai.use(sinonChai);

describe('ProductsController', function () {
  const req = {} as Request;
  const res = {} as Response;

  beforeEach(function () {
    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
    sinon.restore();
  });

  it('CREATE', async function () {
    req.body = productMock.productsList
    const responseServ: ServiceResponse<Product> = {
      status: 'SUCCESSFUL',
      data: productMock.validCreateProductBody,
    }
    sinon.stub(productService, 'create').resolves(responseServ);
    await productController.create(req, res)

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(productMock.validCreateProductBody)
  })
});
