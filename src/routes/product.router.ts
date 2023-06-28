import { Router } from 'express';
import productController from '../controller/product.controller';
import validateName from '../middleware/validateName';
import validatePrice from '../middleware/validatePrice';

const productRouter = Router();

productRouter.get('/products', productController.list);
productRouter.post(
  '/products', 
  validateName,
  validatePrice,
  productController.create,
);

export default productRouter;