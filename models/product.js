class Product {
    static products = [];

    constructor(title) {
        this.title = title;
    }

    save() {
        Product.products.push(this);
    }

    static fetchAll() {
        return Product.products;
    }
}

module.exports = Product;