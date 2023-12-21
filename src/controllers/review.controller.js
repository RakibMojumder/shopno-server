const Review = require('../models/review');
const Product = require('../models/product');
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

module.exports.addReview = async (req, res) => {
    try {
        const review = await Review.create({ ...req.body });
        if (review) {
            await Product.findOneAndUpdate({ _id: req.body.productId }, { $inc: { totalRating: 1 } })
        }

        res.json({
            success: true,
            message: 'Successfully add review'
        })

    } catch (error) {
        res.json({
            success: false,
            message: 'Could not add review',
            error: error.message
        })
    }
};


module.exports.getReviews = async (req, res) => {
    try {
        const reviews = await Review.aggregate([
            { $match: { productId: new ObjectId(req.query.productId) } },
            {
                $lookup: {
                    from: 'users',
                    localField: 'userId',
                    foreignField: '_id',
                    as: 'user',
                    pipeline: [
                        { $project: { _id: 0, username: 1, email: 1 } }
                    ]
                }
            },
            {
                $project: { rating: 1, review: 1, reviewDate: 1, user: 1 }
            }
        ])

        res.json({
            success: true,
            message: 'Successfully get reviews',
            data: reviews
        })

    } catch (error) {
        res.json({
            success: false,
            message: 'Could not get reviews',
            error: error.message
        })
    }
}