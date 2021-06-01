const express = require('express');
const router = express.Router();
const user = require('./user')
const product = require('./inventory');
const cart = require('./cart')
const order = require('./order');
router.get('/',(req,res)=>{
    return res.send("hi");
})
router.use('/users',user);
router.use('/product',product);
router.use('/cart',cart)
router.use('/order',order)
router.use('/uploads/data/inventory',express.static('uploads/data/inventory'));
module.exports = router;