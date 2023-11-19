const express = require('express');
const { getOrderByTransaction, getUsersOrder } = require('../controllers/order.controllers');
const router = express.Router();

router.route('/').get(getOrderByTransaction);
router.route('/user').get(getUsersOrder);

module.exports = router;