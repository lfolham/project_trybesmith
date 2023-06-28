import { Router } from 'express';
import loginController from '../controller/login.controller';

const loginRouter = Router();

loginRouter.get('/login', loginController.login);

export default loginRouter;