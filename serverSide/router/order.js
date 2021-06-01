const express = require('express');
const authentication = require('../middlewares/authentication');
const router = express.Router();
const orderManager = require('../controller/orderManager');

router.get('/getOrder',orderManager.getOrder);
router.get('/checkout',orderManager.orderItems);
module.exports= router;