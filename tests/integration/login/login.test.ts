import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import App from '../../../src/app'

import loginMock from '../../mocks/login.mock';
import UserModel from '../../../src/database/models/user.model';

chai.use(chaiHttp);

describe('POST /login', function () { 
  beforeEach(function () { sinon.restore(); });
    it('Retorne um erro caso não receba um e-amail válido', async function () {
    const httpRequestBody = loginMock.noEmailLoginBody;

    const httpResponse = await chai.request(App).post('/login').send(httpRequestBody);

    expect(httpResponse.status).to.equal(400);
    expect(httpResponse.body).to.be.deep.equal({ message: '"username" and "password" are required' });
});

it('Retorne um erro caso não receba uma senha válida', async function () {
  const httpRequestBody = loginMock.noPasswordLoginBody

  const httpResponse = await chai.request(App).post('/login').send(httpRequestBody);

  expect(httpResponse.status).to.equal(400);
  expect(httpResponse.body).to.be.deep.equal({ message: '"username" and "password" are required' });
});

it('Retorne um erro caso receba um e-amail inexistente', async function () {
  const httpRequestBody = loginMock.notExistingUserBody
  sinon.stub(UserModel, 'findOne').resolves(null);

  const httpResponse = await chai.request(App).post('/login').send(httpRequestBody);

  expect(httpResponse.status).to.equal(401);
  expect(httpResponse.body).to.be.deep.equal({ message: 'Username or password invalid' });
});

it('Retorne um erro caso receba um e-amail existente e uma senha errada', async function () {

  const httpRequestBody = loginMock.existingUserWithWrongPasswordBody 
  const mockFindOneReturn = UserModel.build(loginMock.existingUser);
  sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn);


  const httpResponse = await chai.request(App).post('/login')
    .send(httpRequestBody);

  expect(httpResponse.status).to.equal(401);
  expect(httpResponse.body).to.be.deep.equal({ message: 'Username or password invalid' });
});

it('Retorne um token', async function () {
  const httpRequestBody = loginMock.validLoginBody
  const mockFindOneReturn = UserModel.build(loginMock.existingUser);
  sinon.stub(UserModel, 'findOne').resolves(mockFindOneReturn);

  const httpResponse = await chai.request(App).post('/login').send(httpRequestBody);

  expect(httpResponse.status).to.equal(200);
  expect(httpResponse.body).to.have.key('token');
});
});
