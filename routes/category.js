import { createCategory, deleteCategory, listCategory, listCategoryDetail, updateCategory } from '../controllers/category';


const express = require('express');
const route = express.Router();

route.get('/category/:id', listCategoryDetail);
route.get('/category', listCategory);
route.post('/category', createCategory);
route.delete('/category/:id', deleteCategory);
route.put('/category/:id', updateCategory);
export default route;