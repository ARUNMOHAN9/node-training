const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/product');

router.get('/add-product', ProductController.getAddProduct);

router.post('/add-product', ProductController.postAddProduct);

module.exports = router;
