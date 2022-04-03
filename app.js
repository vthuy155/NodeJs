// B1: include thư viện http 
import express  from 'express';
import mongoose from 'mongoose';
import homeRoute from './routes/home';
import productDetail from './routes/products';
import newsRoute from './routes/news';
import category from './routes/category';
import authRoute from './routes/auth';
import cors from "cors"
const app = express();
app.use(cors());
app.use(express.json());
app.use(homeRoute);
app.use("/api",productDetail);
app.use("/api", category)
app.use(newsRoute);
app.use("/api", authRoute);

mongoose.connect('mongodb://127.0.0.1:27017/we16307');
// B3: Lắng nghe cổng thực thi
const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});