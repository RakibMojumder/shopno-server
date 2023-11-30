const Order = require('../models/order');

module.exports.getOrderByTransaction = async (req, res) => {
    try {
        const transactionId = req.query.transactionId;
        const product = await Order.findOne({ transactionId }).select('products customerInfo -_id');

        res.json({
            success: true,
            msg: 'Successfully got the order products',
            data: product
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error.message
        })
    }
}

module.exports.getUsersOrder = async (req, res) => {
    try {
        const email = req.query.email;
        const product = await Order.aggregate([
            { $match: { "customerInfo.email": email } },
            { $group: { _id: "$date", orders: { $push: '$products' } } },
            { $sort: { _id: -1 } }
        ]);

        res.json({
            success: true,
            msg: 'Successfully got the order products',
            data: product
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error.message
        })
    }
}