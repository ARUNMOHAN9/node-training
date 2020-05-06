const express = require('express');
const router = express.Router();

const ProductController = require('../controllers/product');

router.get('/', ProductController.displayProducts);

module.exports = router;