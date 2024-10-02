import express from 'express';
import { getProductById, getProducts } from '../controllers/productController.js';

const productsRouter = express.Router();

productsRouter.route('/').get(getProducts);
productsRouter.route('/:id').get(getProductById);

export default productsRouter;