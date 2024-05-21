import express from 'express';
//import cartRoutes from './routes/cartRoutes.js';
import { Router } from 'express';
//import handlebars from "express-handlebars";
import productRoutes from './routes/productsRoutes.js';
import cartRoutes from './routes/cartRoutes.js';

import { connectMongoDB } from './config/mongoDb.config.js'; // e

connectMongoDB();

const app = express();
const PORT = 8080;

app.use(express.json()); // Middleware para parsear JSON
app.use('/api/products', productRoutes);
app.use('/api/carts', cartRoutes);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});


