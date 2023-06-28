import { Request, Response } from 'express';
import mapStatusHTTP from '../utils/mapStatusHTTP';
import { ServiceResponse } from '../types/ServiceResponse';
import { Token } from '../types/Token';
import loginServices from '../services/login.services';

async function login(req: Request, res: Response): Promise<Response> {
  const response: ServiceResponse<Token> = await loginServices.validateLogin(req.body);

  if (response.status !== 'SUCCESSFUL') {
    res.status(mapStatusHTTP(response.status)).json(response.data);  
  }
  
  return res.status(200).json(response.data);
}

export default {
  login,
};