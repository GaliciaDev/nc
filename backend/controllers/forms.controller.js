import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener la ruta del archivo actual
const __filename = fileURLToPath(import.meta.url);
// Obtener la ruta del directorio actual
const __dirname = path.dirname(__filename);

const jsonFilePath = path.join(__dirname, '../models/products/products.model.json');

export const updateProduct = (req, res) => {
    const { category, id, updatedProduct } = req.body;

    try {
        const data = fs.readFileSync(jsonFilePath, 'utf8');
        const products = JSON.parse(data);

        const categoryProducts = products.categorias[category];
        const productIndex = categoryProducts.findIndex(product => product.id === id);

        if (productIndex !== -1) {
            categoryProducts[productIndex] = { ...categoryProducts[productIndex], ...updatedProduct };
            fs.writeFileSync(jsonFilePath, JSON.stringify(products, null, 2), 'utf8');
            res.status(200).json({ message: 'Product updated successfully' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const addProduct = (req, res) => {
    const { category, newProduct } = req.body;

    try {
        const data = fs.readFileSync(jsonFilePath, 'utf8');
        const products = JSON.parse(data);

        const categoryProducts = products.categorias[category];
        newProduct.id = categoryProducts.length ? categoryProducts[categoryProducts.length - 1].id + 1 : 1;
        categoryProducts.push(newProduct);

        fs.writeFileSync(jsonFilePath, JSON.stringify(products, null, 2), 'utf8');
        res.status(201).json({ message: 'Product added successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};