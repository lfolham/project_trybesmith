import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import App from '../../../src/app'

import productMock from '../../mocks/product.mock';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });
    it('CREATE está funcionando corretamente', async function() {
      //arrange
      const httpRequestBody = productMock.validCreateProductBody;
      //act
      const httpResponse = await chai.request(App).post('/products').send(httpRequestBody);
      //assert
      expect(httpResponse.status).to.be.equal(201);
      expect(httpResponse.body).to.be.deep.equal(productMock.validatedCreatedProductBody)
      //exemplo do dia 04 do course
    })
});
