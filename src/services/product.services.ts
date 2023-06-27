import ProductModel from "../database/models/product.model";

import { Product } from '../types/Product';
import { ServiceResponse } from '../types/serviceRespose';

async function create(product:Product): Promise<ServiceResponse<Product>> {
    const newProduct = await ProductModel.create(product);

    const response: ServiceResponse<Product> = {
        status: 'SUCCESSFUL', data: newProduct.dataValues
    };

    return response;
}

export default {
    create,
};