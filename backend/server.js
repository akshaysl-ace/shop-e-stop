import express from 'express';
import products from './data/products.js';
import dotenv from 'dotenv';
import connectToDB from './config/db.js';

// First of all, init the config else .env variables will not be loaded.
// Do not remove below code or do not add anything above this line
dotenv.config();
const PORT = process.env.PORT || 5000;

connectToDB();
const app = express();

app.get('/', (req, res) => {
    res.send("API is running...");
});

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find(i => i._id === req.params.id);
    res.json(product);
});

app.listen(PORT, () => {
    console.log("Server running on PORT", PORT);
})