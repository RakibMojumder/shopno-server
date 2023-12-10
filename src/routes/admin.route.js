const express = require('express');
const { isAdmin } = require('../middleware/isAdmin');
const { getAllProductsAdmin, addProduct, imageUpload, deleteProduct, updateProduct, getAllUsers, getAllOrders } = require('../controllers/admin.controller');
const router = express.Router();

router.route('/get-products').get(isAdmin, getAllProductsAdmin);
router.route('/get-users').get(isAdmin, getAllUsers);
router.route('/get-orders').get(getAllOrders);
router.route('/add-product').post(isAdmin, addProduct);
router.route('/image-upload').post(isAdmin, imageUpload);
router.route('/update-product/:id').put(isAdmin, updateProduct);
router.route('/:id').delete(isAdmin, deleteProduct);

module.exports = router;