//exemplo do course do dia 04 - Testes de

//exemplo do course do dia 04 - Aplicando BCripy

const validPassword = 'ch4ng3m3';
const noEmailLoginBody = { username: '', password: validPassword };
const validUsername = 'Eddie';
const noPasswordLoginBody = { username: validUsername, password: '' };
const notExistingUserBody = { username: 'trybe@trybe.com', password: validPassword };
const validLoginBody = { username: validUsername, password: validPassword };
const existingUserWithWrongPasswordBody = { username: validUsername, password: 'wrong_password' };
const hashedPassword = '$2a$10$lQGsGScdxhjGRuYVJX3PX.347IWLNiSk6hOiMmjxlzLEI32lg5LMW';
const existingUser = { 
  id: 1, 
  username: validUsername,
  password: hashedPassword,
  name: 'user1',
  vocation: 'Guerreiro',
  level: 10
};

export default {
  noEmailLoginBody,
  noPasswordLoginBody,
  notExistingUserBody,
  existingUserWithWrongPasswordBody,
  existingUser,
  validLoginBody,
};