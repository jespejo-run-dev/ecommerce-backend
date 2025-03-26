import ProductRepository from '../../infrastructure/repositories/ProductRepository.js';

class ProductUseCase {
  // Crear un producto
  async create(productData) {
    // Validación precio mínimo
    const MIN_PRICE = 0.01;
    if (productData.price < MIN_PRICE) {
      throw new Error(`El precio del producto debe ser mayor que ${MIN_PRICE}.`);
    }

    // Validación stock mínimo
    const MIN_STOCK = 1;
    if (productData.stock < MIN_STOCK) {
      throw new Error(`El stock de ${productData.name} está por debajo del mínimo permitido.`);
    }

    try {
      const product = await ProductRepository.create(productData);
      return product;
    } catch (error) {
      throw new Error('Error al crear el producto: ' + error.message);
    }
  }

  // Obtener todos los productos
  async getAll() {
    try {
      const products = await ProductRepository.getAll();
      return products;
    } catch (error) {
      throw new Error('Error al obtener productos: ' + error.message);
    }
  }

  // Obtener un producto por SKU
  async getBySku(sku) {
    try {
      const product = await ProductRepository.getBySku(sku);
      return product;
    } catch (error) {
      throw new Error('Error al obtener el producto: ' + error.message);
    }
  }

  // Actualizar un producto por SKU
  async update(sku, productData) {
    // Validación precio mínimo
    const MIN_PRICE = 0.01;
    if (productData.price && productData.price < MIN_PRICE) {
      throw new Error(`El precio del producto debe ser mayor que ${MIN_PRICE}.`);
    }

    // Validación stock mínimo
    const MIN_STOCK = 1;
    if (productData.stock && productData.stock < MIN_STOCK) {
      throw new Error(`El stock de ${productData.name} está por debajo del mínimo permitido.`);
    }

    try {
      const updatedProduct = await ProductRepository.update(sku, productData);
      return updatedProduct;
    } catch (error) {
      throw new Error('Error al actualizar el producto: ' + error.message);
    }
  }

  // Eliminar un producto por SKU
  async delete(sku) {
    try {
      const deletedProduct = await ProductRepository.delete(sku);
      return deletedProduct;
    } catch (error) {
      throw new Error('Error al eliminar el producto: ' + error.message);
    }
  }

  // Desactivar un producto por SKU
  async deactivate(sku) {
    try {
      const updatedProduct = await ProductRepository.deactivate(sku);
      return updatedProduct;
    } catch (error) {
      throw new Error('Error al desactivar el producto: ' + error.message);
    }
  }

  // Activar un producto por SKU
  async activate(sku) {
    try {
      const updatedProduct = await ProductRepository.activate(sku);
      return updatedProduct;
    } catch (error) {
      throw new Error('Error al activar el producto: ' + error.message);
    }
  }
}

export default new ProductUseCase();
