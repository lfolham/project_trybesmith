import ProductModel, { ProductSequelizeModel } from '../database/models/product.model';

import { Product } from '../types/Product';
import { ServiceResponse } from '../types/ServiceResponse';

async function list(): Promise<ServiceResponse<ProductSequelizeModel[]>> {
  const productsList = await ProductModel.findAll();

  return { status: 'SUCCESSFUL', data: productsList };
}

async function create(product:Product): Promise<ServiceResponse<Product>> {
  const newProduct = await ProductModel.create(product);

  const response: ServiceResponse<Product> = {
    status: 'SUCCESSFUL', data: newProduct.dataValues,
  };

  return response;
}

export default {
  list,
  create,
};