import { Router } from 'express';
import productController from '../controller/product.controller';

const productRouter = Router();

productRouter.post('/products', productController.create);

export default productRouter;