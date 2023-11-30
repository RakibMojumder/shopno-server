const express = require('express');
const { paymentInit, paymentSuccess, paymentFailed, paymentCancel, createPaymentIntent, stripePayment } = require('../controllers/payment.controllers');
const { verifyToken } = require('../middleware/verifyToken');
const router = express.Router();

router.route('/').post(paymentInit);
router.route('/fail').post(paymentFailed);
router.route('/cancel').post(paymentCancel);
router.route('/success').post(paymentSuccess);
router.route('/stripe-payment').post(verifyToken, stripePayment)
router.route('/create-payment-intent').post(verifyToken, createPaymentIntent);

module.exports = router;