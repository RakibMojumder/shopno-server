const express = require('express');
const { getProducts, getSearchProducts, getProduct, getAllDivisions, getAllDistricts, getBestSellerProduct } = require('../controllers/product.controllers');
const router = express.Router();

router.route('/').get(getProducts);
router.route('/divisions').get(getAllDivisions);
router.route('/districts').get(getAllDistricts);
router.route('/search').get(getSearchProducts);
router.route('/best-seller').get(getBestSellerProduct);
router.route('/:id').get(getProduct);

module.exports = router;