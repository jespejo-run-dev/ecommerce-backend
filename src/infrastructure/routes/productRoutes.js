import express from 'express';
import ProductController from '../controllers/ProductController.js';

const router = express.Router();



// crear producto
router.post('/products', ProductController.create);
// Obtener todos los productos
router.get('/products', ProductController.getAll);
// Obtener un producto por SKU
router.get('/products/:sku', ProductController.getBySku);

// Actualizar producto por SKU
router.patch('/products/:sku', ProductController.update);

// Eliminar un producto por SKU
router.delete('/products/:sku', ProductController.delete);

// Desactivar producto por SKU
router.patch('/products/deactivate/:sku', ProductController.deactivate);
// Activar producto por SKU
router.patch('/products/activate/:sku', ProductController.activate);

export default router;