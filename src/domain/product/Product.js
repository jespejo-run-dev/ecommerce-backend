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
  }
}

export default Product;