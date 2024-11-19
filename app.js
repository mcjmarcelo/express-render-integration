const express = require('express');
const productService = require('./product-service');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/products', productService);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
