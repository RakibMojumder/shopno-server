const express = require('express');
const { getProducts, getSearchProducts, getProduct } = require('../controllers/product.controllers');
const router = express.Router();

router.route('/').get(getProducts);
router.route('/search').get(getSearchProducts);
router.route('/:id').get(getProduct);

module.exports = router;