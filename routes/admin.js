const path = require('path');

const express = require('express');

const rootDir = require('../utils/path');

const router = express.Router();

const productList = [];

router.get('/add-product', (req, res, next) => {
    // res.send(`
    //     <form action='/admin/product' method='POST'>
    //         <input name='product' type='text'/>
    //         <button type='submit'>Add Product</button>
    //     </form>
    // `);
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', {tab: 'addProduct'});
});

router.post('/add-product', (req, res, next) => {
    // console.log(req.body);
    productList.push({title: req.body.title});
    res.redirect('/');
});

// module.exports = router;
exports.router = router;
exports.productList = productList;
