const { Schema, model } = require('mongoose');
const ObjectId = Schema.Types.ObjectId;

const productSchema = Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Product name is required'],
        minLength: [2, 'Product name is too short'],
        unique: [true, "Name must be unique"]
    },
    category: {
        type: String,
        enum: ['Fashion', 'Automobile', 'Kitchen', 'Gymnasium', 'Electronics', 'Baby', 'Mobile', 'Home Decor', 'Beauty', 'Laptop', 'Health', 'Sports']
    },
    price: {
        type: Number,
        required: [true, 'Product price is required']
    },
    description: String,
    discountPrice: Number,
    rating: Number,
    totalRating: Number,
    image: String,
    reviews: [{
        type: ObjectId,
        ref: 'reviews'
    }],
    buyers: [{
        type: ObjectId,
        ref: 'users'
    }]
}, { timestamps: true });

module.exports = model('products', productSchema);