import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import App from '../../../src/app'

import productMock from '../../mocks/product.mock';
import ProductModel from '../../../src/database/models/product.model';
import { assert } from 'console';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });
  it('A função está retornando uma lista de produtos', async function () {
    //arrange
    const httpRequestBody = productMock.productsList;
    //act
    const productListMock = ProductModel.build(productMock.productsList[1]);
    sinon.stub(ProductModel, 'findAll').resolves([productListMock]);
    const httpResponse = await chai.request(App).post('/products').send(httpRequestBody);
    //assert
    expect(httpResponse.status).to.be.equal(200);
    expect(httpResponse.body).to.be.deep.equal(productMock.productsList)
  })

});
