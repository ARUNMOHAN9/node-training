const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {tab: 'addProduct'});
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.displayProducts = (req, res, next) => {
    res.render('shop.pug',  { productList: Product.fetchAll(), tab: 'shop' });
}