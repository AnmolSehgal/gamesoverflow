const express = require('express');
const authentication = require('../middlewares/authentication');
const router = express.Router();
const orderManager = require('../controller/orderManager');

router.get('/getOrder',authentication.auth,orderManager.getOrder);
router.post('/checkout',authentication.auth,orderManager.orderItems);
module.exports= router;