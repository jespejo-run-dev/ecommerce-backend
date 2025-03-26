class UpdateProduct {
  constructor(productRepository) {
    this.productRepository = productRepository;
  }

  async execute(sku, updateData) {
    const updatedProduct = await this.productRepository.updateBySku(sku, updateData);

    if (!updatedProduct) {
      throw new Error('Producto no encontrado');
    }

    return updatedProduct;
  }
}

export default UpdateProduct;
