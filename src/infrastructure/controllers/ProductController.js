import CreateProduct from '../../application/product/CreateProduct.js';
import ProductRepository from '../repositories/ProductRepository.js';

class ProductController {
  async create(req, res) {
    const { name, price, description, stock, sku } = req.body;
    console.log("Received product data:", req.body);
    try {
      const productRepository = new ProductRepository();
      const createProduct = new CreateProduct(productRepository);
      const newProduct = await createProduct.execute({ name, price, description, stock, sku });
      res.status(201).json(newProduct);
    } catch (error) {
      console.error("Error creating product:", error);
      res.status(500).json({ message: 'Error creating product' });
    }
  }
}

export default new ProductController();