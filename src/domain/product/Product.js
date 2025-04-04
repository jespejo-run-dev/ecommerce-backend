class Product {
  constructor({ id, name, description, price, stock, slug, sku, imageUrl, status, createdAt, updatedAt, categoryId }) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.stock = stock;
    this.slug = slug;
    this.sku = sku;
    this.imageUrl = imageUrl;
    this.status = status;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.categoryId = categoryId;
    this.formattedPrice = this.formatPrice(price);
  }

  formatPrice(price) {
    return new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
      minimumFractionDigits: 0,
    }).format(price);
  }
  
  getInfo() {
    return {
      sku: this.sku,
      name: this.name,
      description: this.description,
      price: this.price,
      stock: this.stock,
      imageUrl: this.imageUrl,
      slug: this.slug,
      active: this.active,
    };
  }
}

export default Product;