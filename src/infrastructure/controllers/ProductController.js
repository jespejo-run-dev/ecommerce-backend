import CreateProduct from '../../application/product/CreateProduct.js';
import UpdateProduct from '../../application/product/UpdateProduct.js';
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

  async update(req, res) {
    let { sku } = req.params;
  
    sku = sku.toString();  
  
    const updateData = req.body; 
  
    try {
      const productRepository = new ProductRepository();
      const updateProduct = new UpdateProduct(productRepository);
      const updatedProduct = await updateProduct.execute(sku, updateData);  // Usamos SKU para la actualización
      
      if (!updatedProduct) {
        return res.status(404).json({ message: 'Product not found' });
      }
      
      res.json(updatedProduct);  
  
    } catch (error) {
      console.error("Error updating product:", error);
      res.status(400).json({ message: error.message });
    }
  }


  async deactivate(req, res) {
    const { sku } = req.params;  // Recibimos el SKU del producto a desactivar
    
    try {
      const productRepository = new ProductRepository();
      const deactivatedProduct = await productRepository.updateStatusBySku(sku, 'inactive');
      
      if (!deactivatedProduct) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }
      res.status(200).json(deactivatedProduct);
    } catch (error) {
      console.error("Error deactivating product:", error);
      res.status(500).json({ message: 'Error deactivating product' });
    }
  }


  async activate(req, res) {
    const { sku } = req.params;  
    try {
      const productRepository = new ProductRepository();
      const updatedProduct = await productRepository.updateStatusBySku(sku, 'active');
      
      if (!updatedProduct) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }
      res.json({ message: 'Producto activado correctamente', product: updatedProduct });
    } catch (error) {
      console.error("Error activating product:", error);
      res.status(500).json({ message: 'Error activating product' });
    }
  }
}

export default new ProductController();