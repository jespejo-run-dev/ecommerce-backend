import express from 'express';
import ProductController from '../controllers/ProductController.js';

const router = express.Router();

router.post('/products', ProductController.create);
router.patch('/products/deactivate/:sku', ProductController.deactivate);
router.patch('/products/activate/:sku', ProductController.activate);

router.patch('/products/:sku', ProductController.update);  // Actualizar producto por SKU



export default router;