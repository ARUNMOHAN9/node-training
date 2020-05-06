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
    Product.fetchAll().then((result) => {
        res.render('shop.pug',  { productList: result, tab: 'shop' });
    }).catch(err => {
        console.log(err);
        res.render('shop.pug',  { productList: [], tab: 'shop' });
    });
}