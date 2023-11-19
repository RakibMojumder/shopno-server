const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    transactionId: String,
    paid: Boolean,
    customerInfo: {
        email: String,
        name: String,
        phone: String,
        division: String,
        district: String,
        address: String,
        postCode: String
    },
    totalPrice: Number,
    products: [
        {
            type: Object
        }
    ],
}, { timestamps: true });

module.exports = mongoose.model('order', orderSchema);