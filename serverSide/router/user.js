const express = require('express');
const router = express.Router();
const userSignUpController = require('../controller/userSignup');
router.post('/signup',userSignUpController.signUp);

module.exports = router;