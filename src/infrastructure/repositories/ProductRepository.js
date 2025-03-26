import prisma from '../../infrastructure/db/prismaClient.js';
import Product from '../../domain/product/Product.js';

class ProductRepository {
  // Crear un producto
  static async create(productData) {
    // Generar slug
    const slug = productData.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

    // Validar SKU duplicado
    const existingProductBySku = await prisma.product.findUnique({
      where: { sku: productData.sku },
    });

    if (existingProductBySku) {
      throw new Error('El producto con este SKU ya existe.');
    }

    const product = await prisma.product.create({
      data: { ...productData, slug },
    });

    return new Product(product);
  }

  // Obtener todos los productos
  static async getAll() {
    const products = await prisma.product.findMany();
    return products.map(product => new Product(product));
  }

  // Obtener un producto por SKU
  static async getBySku(sku) {
    const product = await prisma.product.findUnique({
      where: { sku },
    });

    if (!product) {
      throw new Error('Producto no encontrado');
    }

    return new Product(product);
  }

  // Actualizar un producto por SKU
  static async update(sku, updateData) {
    // Si se actualiza el nombre, generar un nuevo slug
    if (updateData.name) {
      updateData.slug = updateData.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
    }

    const updatedProduct = await prisma.product.update({
      where: { sku },
      data: updateData,
    });

    return new Product(updatedProduct);
  }

  // Eliminar un producto por SKU
  static async delete(sku) {
    const deletedProduct = await prisma.product.delete({
      where: { sku },
    });

    return new Product(deletedProduct);
  }

  // Desactivar un producto por SKU
  static async deactivate(sku) {
    const updatedProduct = await prisma.product.update({
      where: { sku },
      data: { status: 'inactive' },
    });

    return new Product(updatedProduct);
  }

  // Activar un producto por SKU
  static async activate(sku) {
    const updatedProduct = await prisma.product.update({
      where: { sku },
      data: { status: 'active' },
    });

    return new Product(updatedProduct);
  }
}

export default ProductRepository;
