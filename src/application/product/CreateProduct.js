class CreateProduct {
    constructor(productRepository) {
      this.productRepository = productRepository;
    }
  
    async execute(productData) {
      const product = await this.productRepository.create(productData);
      return product;
    }
  }
  
export default CreateProduct;