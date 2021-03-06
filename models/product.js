const mongoDb = require('mongodb');
const getDb = require('../util/database').getDb;

class Product {
  constructor(title, price, description, imageUrl) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  save() {
    const db = getDb();
    return db
      .collection('products')
      .insertOne(this)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
  }

  delete(prodId) {
    const db = getDb();
    return db
      .collection('products')
      .remove({ _id: new mongoDb.ObjectId(prodId) })
  }

  update(updatedProduct) {
    const db = getDb();
    return db
      .collection('products')
      .update({ _id: new mongoDb.ObjectId(updatedProduct.prodId) }, updatedProduct)
  }

  static fetchAll() {
    const db = getDb();
    return db
      .collection('products')
      .find()
      .toArray()
      .then(products => {
        console.log(products);
        return products;
      })
      .catch(err => console.log(err))
  }

  static fetchById(prodId) {
    const db = getDb();
    return db
      .collection('products')
      .find({ _id: new mongoDb.ObjectId(prodId) })
      .next()
      .then(product => {
        console.log(product);
        return product        
      })
      .catch(err => console.log(err))
  }
}

module.exports = Product;
