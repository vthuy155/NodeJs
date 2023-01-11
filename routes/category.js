import { createCategory, deleteCategory, DetailCate, listCategory, listCategoryDetail, updateCategory } from '../controllers/category';


const express = require('express');
const route = express.Router();

route.get('/categoryDetail/:id', listCategoryDetail);
route.get('/category/:id', DetailCate);
route.get('/category', listCategory);
route.post('/category', createCategory);
route.delete('/category/:id', deleteCategory);
route.patch('/category/:id', updateCategory);
export default route;