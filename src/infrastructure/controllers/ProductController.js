import ProductUseCase from '../../application/product/ProductRepository.js';

class ProductController {
  // Crear un producto
  static async create(req, res) {
    const { sku, name, description, price, stock } = req.body;

    try {
      const newProduct = await ProductUseCase.create({ sku, name, description, price, stock });
      res.status(201).json({ message: 'Producto creado exitosamente', product: newProduct });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Obtener todos los productos
  static async getAll(req, res) {
    try {
      const products = await ProductUseCase.getAll();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Obtener un producto por SKU
  static async getBySku(req, res) {
    const { sku } = req.params;

    try {
      const product = await ProductUseCase.getBySku(sku);
      res.status(200).json(product);
    } catch (error) {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  }

  // Actualizar un producto por SKU
  static async update(req, res) {
    const { sku } = req.params;
    const { name, description, price, stock, imageUrl } = req.body;

    try {
      const updatedProduct = await ProductUseCase.update(sku, { name, description, price, stock, imageUrl });
      res.status(200).json({ message: 'Producto actualizado exitosamente', product: updatedProduct });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  // Eliminar un producto por SKU
  static async delete(req, res) {
    const { sku } = req.params;

    try {
      const deletedProduct = await ProductUseCase.delete(sku);
      if (deletedProduct) {
        res.status(200).json({ message: 'Producto eliminado exitosamente', product: deletedProduct });
      } else {
        res.status(404).json({ error: 'Producto no encontrado para eliminar' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar el producto: ' + error.message });
    }
  }

  // Desactivar un producto por SKU
  static async deactivate(req, res) {
    const { sku } = req.params;

    try {
      const updatedProduct = await ProductUseCase.deactivate(sku);
      if (updatedProduct) {
        res.status(200).json({ message: 'Producto desactivado exitosamente', product: updatedProduct });
      } else {
        res.status(404).json({ error: 'Producto no encontrado para desactivar' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al desactivar el producto: ' + error.message });
    }
  }

  // Activar un producto por SKU
  static async activate(req, res) {
    const { sku } = req.params;

    try {
      const updatedProduct = await ProductUseCase.activate(sku);
      if (updatedProduct) {
        res.status(200).json({ message: 'Producto activado exitosamente', product: updatedProduct });
      } else {
        res.status(404).json({ error: 'Producto no encontrado para activar' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error al activar el producto: ' + error.message });
    }
  }
}

export default ProductController;
