import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import App from '../../../src/app'

import productMock from '../../mocks/product.mock';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('A função está retornando uma lista de produtos', async function () {

    const productListMock = ProductModel.build(productMock.productsList[0]);
    sinon.stub(ProductModel, 'findAll').resolves([productListMock]);

    const httpResponse = await chai.request(App).get('/products');

    expect(httpResponse.status).to.be.equal(200);
    expect(httpResponse.body).to.be.deep.equal(productMock.productsList)

  })
});
