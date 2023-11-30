const Product = require('../models/product');
const User = require('../models/user');
const { v2: cloudinary } = require('cloudinary');

module.exports.getAllProductsAdmin = async (req, res) => {
    try {
        const query = req.query.search;
        let products;
        if (query) {
            products = await Product.find({
                $or: [
                    { name: new RegExp(query, 'i') },
                    { category: new RegExp(query, 'i') },
                ]
            })
        } else {
            products = await Product.find({});
        }


        res.json({
            success: true,
            message: 'successfully user found',
            data: products
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: 'Could not get product'
        })
    }
}


module.exports.imageUpload = async (req, res) => {
    try {
        const image = req.body.data;
        cloudinary.uploader.upload(image,
            // { public_id: "olympic_flag" },
            (error, result) => {
                if (error) {
                    return res.json({
                        success: false,
                        error: error.message
                    })
                }

                res.json({ imageSrc: result.url })
            }
        );
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error.message
        })
    }
};


module.exports.addProduct = async (req, res) => {
    try {
        const product = await Product.create({ ...req.body });
        res.json({
            success: true,
            message: 'successfully add the product',
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error.message
        })
    }
};


module.exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.json({
            success: true,
            message: 'successfully delete the product',
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error.message
        })
    }
};

module.exports.updateProduct = async (req, res) => {
    try {
        const update = await Product.findByIdAndUpdate(req.params.id, { ...req.body })
        res.json({
            success: true,
            message: 'successfully update the product',
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error.message
        })
    }
};


module.exports.getAllUsers = async (req, res) => {
    try {
        const role = req.query.role;
        const users = await User.find({ role });

        res.json({
            success: true,
            message: 'successfully got the users',
            data: users
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error.message
        })
    }
}