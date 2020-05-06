const express = require('express');
const router = express.Router();

const productList = [];

router.get('/add-product', (req, res, next) => {
    res.render('add-product', {tab: 'addProduct'});
});

router.post('/add-product', (req, res, next) => {
    productList.push({title: req.body.title});
    res.redirect('/');
});

exports.router = router;
exports.productList = productList;
