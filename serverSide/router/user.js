const express = require('express');
const router = express.Router();
const userSignUpController = require('../controller/userSignup');
const userSignInController = require('../controller/userSignin');
router.post('/signup',userSignUpController.signUp);
router.post('/signin',userSignInController.signIn);
module.exports = router;