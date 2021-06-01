const express = require('express');
const authentication = require('../middlewares/authentication');
const router = express.Router();
const cartManager = require('../controller/cartManager')

router.post('/addToCart',authentication.auth,cartManager.addtocart);
router.get('/getCart',authentication.auth,cartManager.getCart);
router.post('/delete',authentication.auth,cartManager.deleteItem);
module.exports = router;