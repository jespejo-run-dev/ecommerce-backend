import Product from '../../domain/product/Product.js';
import prisma from '../db/prismaClient.js';

class ProductRepository {
  async create(productData) {

    console.log("Datos del producto en el repositorio:", productData); 

    if (!productData.sku) {
      throw new Error("SKU is required");
    }

    const slug = productData.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

    const productWithSlug = { ...productData, slug };


    const createdProduct = await prisma.product.create({
      data: productWithSlug,
    });

    return new Product(createdProduct);
  }

  async getById(id) {
    const product = await prisma.product.findUnique({
      where: { id },
    });
    return new Product(product);
  }
}

export default ProductRepository;