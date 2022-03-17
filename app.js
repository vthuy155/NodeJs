// B1: include thư viện http 
import express  from 'express';
const app = express();
import mongoose from 'mongoose';

import homeRoute from './routes/home';
import productDetail from './routes/products';
import newsRoute from './routes/news';
app.use(express.json());
app.use(homeRoute);
app.use("/api",productDetail);
app.use(newsRoute);


mongoose.connect('mongodb://localhost:27017/we16307');
// B3: Lắng nghe cổng thực thi
const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});