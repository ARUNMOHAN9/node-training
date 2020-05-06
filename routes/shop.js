const path = require('path');

const express = require('express');

const router = express.Router();

const admin = require('./admin');

router.get('/', (req, res, next) => {
    // console.log('second middleware');
    // res.send('<h1>Express App</h1>');
    console.log(admin.productList);
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    res.render('shop.pug',  { productList: admin.productList, tab: 'shop' });
});

module.exports = router;