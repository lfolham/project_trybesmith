import { Request, Response } from 'express';
import productServices from '../services/product.services';

async function create(req:Request, res:Response) {
    const { name, price, orderId } = req.body;
    const response = await productServices.create({ 
        name, 
        price, 
        orderId 
    });

    res.status(201).json(response.data);
}

export default {
    create,
};