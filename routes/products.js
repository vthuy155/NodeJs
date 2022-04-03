import { createProduct, deleteProduct, listNewsProduct, listProduct, listProductDetail, updateProduct } from '../controllers/products';
import { userById } from '../controllers/user';
import { isAuth, requiredSignin } from '../middlewares/checkAuth';

const express = require('express');
const route = express.Router();
const products = [
    {id: 1, name: "ProductA"},
    {id: 2, name: "ProductB"},
    {id: 3, name: "ProductC"},

]
route.get('/products/:id', listProductDetail);
route.get('/products', listProduct);
route.get('/newproduct', listNewsProduct)
route.post('/products/:userId',requiredSignin, isAuth ,createProduct);
route.delete('/products/:id', deleteProduct);
route.put('/products/:id', updateProduct);
route.param("userId", userById)
export default route;