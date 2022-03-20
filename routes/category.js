import { createCategory, deleteCategory, listCategory, listCategoryDetail, updateCategory } from '../controllers/category';


const express = require('express');
const route = express.Router();

route.get('/categories/:id', listCategoryDetail);
route.get('/categories', listCategory);
route.post('/categories', createCategory);
route.delete('/categories/:id', deleteCategory);
route.put('/categories/:id', updateCategory);
export default route;