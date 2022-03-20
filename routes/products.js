import { createProduct, deleteProduct, listProduct, listProductDetail, updateProduct } from '../controllers/products';

const express = require('express');
const route = express.Router();
const products = [
    {id: 1, name: "ProductA"},
    {id: 2, name: "ProductB"},
    {id: 3, name: "ProductC"},

]
route.get('/products/:id', listProductDetail);
route.get('/products', listProduct);
route.post('/products', createProduct);
route.delete('/products/:id', deleteProduct);
route.put('/products/:id', updateProduct);
export default route;