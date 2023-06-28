import { expect } from 'chai';
import sinon from 'sinon';
import productMock from '../../mocks/product.mock';
import ProductModel from '../../../src/database/models/product.model';
import productServices from '../../../src/services/product.services';

describe('ProductsService', async function () {
  beforeEach(function () { sinon.restore(); });

  const body = productMock.validCreateProductBody;
  const response = ProductModel.build(productMock.validatedCreatedProductBody)
  sinon.stub(ProductModel, 'create').resolves(response)

  const servResponse = await productServices.create(body);

  expect(servResponse.status).to.equal('SUCCESSFUL');
  expect(servResponse.data).to.deep.equal(productMock.validatedCreatedProductBody);
});
