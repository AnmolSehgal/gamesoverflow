const express = require('express');
const router = express.Router();
const multer = require('multer');
const productManager = require('../controller/productManager')
const path = require('path');
const INVENTORY_PATH = path.join('/uploads/data/inventory');


let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname,'..',INVENTORY_PATH));
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
})
const upload = multer({storage:storage});
router.post('/upload',upload.single('productImage'),productManager.create);
router.get('/read',productManager.getData)
module.exports = router;
