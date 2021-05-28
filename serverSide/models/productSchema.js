const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
        productId:{
            type : String,
            required : true,
            unique:true
        },
        productName:{
            type:String,
            required:true
        },
        productDescription:{
            type:String,
            required:true
        },
        productPrice:{
            type: Number,
            required : true
        },
        productQuantity:{
            type: Number,
            required : true
        },
        productImage:{
            type:String,
        },
        productCategory:{
            type: String,
            required : true
        }

},{timestamp:true});

module.exports = mongoose.model('product',productSchema);
