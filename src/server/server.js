import express from 'express';
import dotenv from 'dotenv';
import productRoutes from '../infrastructure/routes/productRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

// Rutas
app.use('/api', productRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});