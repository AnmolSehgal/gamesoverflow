const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    email : {
        type: String,
    },
    items: [{
        productId: {
            type: String,
        },
        name: String,
        quantity: {
            type: Number,
            required: true,
            min: [1, 'Quantity can not be less then 1.'],
            deafult: 1
        },
        price: Number
    }],
    bill: {
        type: Number,
        required: true,
        default: 0
    }

},{timestamp:true});

module.exports = mongoose.model('product',cartSchema);
