const express = require('express');
const { productDetail, listProduct, creatProduct, deleteProduct, updateProduct } = require('../controllers/products');
const route = express.Router();
const products = [
    {id: 1, name: "ProductA"},
    {id: 2, name: "ProductB"},
    {id: 3, name: "ProductC"},

]
route.get('/products/:id', productDetail);
route.get('/products', listProduct);
route.post('/products', creatProduct);
route.delete('/products/:id', deleteProduct);
route.put('/products/:id', updateProduct);
module.exports = route;