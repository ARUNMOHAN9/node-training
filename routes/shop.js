const express = require('express');
const router = express.Router();

const admin = require('./admin');

router.get('/', (req, res, next) => {
    console.log(admin.productList);
    res.render('shop.pug',  { productList: admin.productList, tab: 'shop' });
});

module.exports = router;