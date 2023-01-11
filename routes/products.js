import { createProduct, deleteProduct, listAZProduct, listMmProduct, listmMProduct, listNewsProduct, listProduct, listProduct1, listProductDetail, listZAProduct, pagination, updateProduct } from '../controllers/products';
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
route.get('/products1', listProduct)
route.get('/productspage/:page', pagination)
route.get('/products', listProduct);
route.get('/productaz', listAZProduct);
route.get('/productza', listZAProduct);
route.get('/productminm', listmMProduct);
route.get('/productmaxm', listMmProduct);
route.get('/newproduct', listNewsProduct);
route.post('/products', createProduct);
route.delete('/products/:id', deleteProduct);
route.patch('/products/:id', updateProduct);
route.param("userId", userById)
export default route;