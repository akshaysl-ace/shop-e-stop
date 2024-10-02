import express from 'express';
import dotenv from 'dotenv';
import connectToDB from './config/db.js';
import productsRouter from './routes/productRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

// First of all, init the config else .env variables will not be loaded.
// Do not remove below code or do not add anything above this line
dotenv.config();
const PORT = process.env.PORT || 5000;

connectToDB();
const app = express();


app.get('/', (req, res) => {
    res.send("API is running...");
});

// Main routes
app.use('/api/products', productsRouter);


// Use Middlewares
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log("Server running on PORT", PORT);
});