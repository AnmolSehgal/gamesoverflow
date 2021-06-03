const mongoose = require('mongoose');

const cartModel = new mongoose.Schema({
    email : {
        type: String,
        unique:true
    },
    items: [{
        productId: {
            type: String,
        },
        productName : {
            type: String
        },
        productImage:{
            type : String,
        },
        quantity: {
            type: Number,
            required: true,
            min: [1, 'Quantity can not be less then 1.'],
            deafult: 1
        },
        price:{
            type:Number,
        }
    },],
    bill: {
        type: Number,
        required: true,
        default: 0
    }

},{timestamp:true});

module.exports = mongoose.model('cartModel',cartModel);
