const express = require('express');
const router = express.Router();
const user = require('./user')
const product = require('./inventory')

router.get('/',(req,res)=>{
    return res.send("hi");
})
router.use('/users',user);
router.use('/product',product);

module.exports = router;