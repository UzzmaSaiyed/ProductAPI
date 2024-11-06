// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
let product = require('./product');

app.use(express.json());
app.use(cors());

// Get all products
app.get('/api/product', (req, res) => {
    res.json(product);
});

// Get a single product by name
app.get('/api/product/:name', (req, res) => {
    const productName = req.params.name;
    const item = product.find(p => p.name === productName);
    if (!item) return res.status(404).json({ message: 'Product not found' });
    res.json(item);
});

// Create a new product
app.post('/api/product', (req, res) => {
    const newProduct = {
        name: req.body.name,
        quantity: req.body.quantity,
        price: req.body.price,
    };
    product.push(newProduct);
    res.status(201).json(newProduct);
});

// Update an existing product by name
app.put('/api/product/:name', (req, res) => {
    const productName = req.params.name;
    const item = product.find(p => p.name === productName);
    if (!item) return res.status(404).json({ message: 'Product not found' });

    // Update product details
    item.quantity = req.body.quantity !== undefined ? req.body.quantity : item.quantity;
    item.price = req.body.price !== undefined ? req.body.price : item.price;

    res.json(item);
});

// Delete a product by name
app.delete('/api/product/:name', (req, res) => {
    const productName = req.params.name;
    const index = product.findIndex(p => p.name === productName);
    if (index === -1) return res.status(404).json({ message: 'Product not found' });

    const deletedProduct = product.splice(index, 1);
    res.json(deletedProduct);
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;