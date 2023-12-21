const express = require('express');
const { addReview, getReviews } = require('../controllers/review.controller');
const router = express.Router();

router.route('/').get(getReviews).post(addReview);

module.exports = router;