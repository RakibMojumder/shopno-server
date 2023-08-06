const express = require('express');
const { register, login, getLoginUser, addToWishList } = require('../controllers/user.controllers');
const { verifyToken } = require('../middleware/verifyToken');
const router = express.Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/get-login-user').get(verifyToken, getLoginUser);
router.route('/:id').post(verifyToken, addToWishList);


module.exports = router;