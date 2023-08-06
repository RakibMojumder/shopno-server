const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: [true, 'User name is required field.'],
    },
    email: {
        type: String,
        required: [true, 'Email is required field'],
        unique: [true, 'This is already exists'],
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required field'],
        unique: [true, 'This phone number already exists'],
    },
    password: {
        type: String,
        required: [true, 'Password is required field']
    },
    wishList: [{
        type: ObjectId,
        ref: 'products'
    }],
    cardList: [{
        type: ObjectId,
        ref: 'products'
    }],
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    recentView: [{
        type: ObjectId,
        ref: 'products'
    }]
}, { timestamps: true });



module.exports = mongoose.model('users', userSchema);