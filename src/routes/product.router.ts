import { Router } from 'express';
import productController from '../controller/product.controller';

const productRouter = Router();

productRouter.get('/products', productController.list);
productRouter.post('/products', productController.create);

export default productRouter;