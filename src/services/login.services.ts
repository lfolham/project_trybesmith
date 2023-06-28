import jwtUtil from '../utils/jwt.util';
import { ServiceResponse } from '../types/ServiceResponse';
import UserModel, { UserSequelizeModel } from '../database/models/user.model';
import { Token } from '../types/Token';
import { Login } from '../types/Login';

async function validateLogin(login: Login): Promise<ServiceResponse<Token>> {
  if (!login.username || !login.password) {
    return { status: 'INVALID_DATA', data: { message: 'Dados inválidos' } };
  }
  const user: UserSequelizeModel | null = await UserModel
    .findOne({ where: { username: login.username } });
  if (!user) {
    return { status: 'ERROR', data: { message: 'Usuário não encontrado' } };
  }
  const passwordMatches: boolean = await user.comparePassword(login.password);
  if (!passwordMatches) {
    return { status: 'ERROR', data: { message: 'Senha incorreta' } };
  }
  const token: string = jwtUtil.generateToken(user.id);
  return { status: 'OK', data: { token } };
}

export default {
  validateLogin,
};