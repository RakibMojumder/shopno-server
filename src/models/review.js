const { Schema, model } = require('mongoose');
const ObjectId = Schema.Types.ObjectId;

const reviewSchema = Schema({
    rating: { type: Number, required: true },
    review: { type: String, required: true },
    productId: {
        type: ObjectId,
        ref: 'products'
    },
    userId: {
        type: ObjectId,
        ref: 'users'
    },
    reviewDate: Date
}, { timestamps: true });

module.exports = model('reviews', reviewSchema)