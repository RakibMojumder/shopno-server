const Product = require('../models/product');

module.exports.getProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);

        if (!product) {
            return res.json({
                success: false,
                message: 'could not find product'
            })
        }

        res.json({
            success: true,
            message: 'successfully find product',
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


module.exports.getProducts = async (req, res) => {
    try {
        const { category } = req.query;
        let products;

        if (category) {
            products = await Product.find({ category });
            return res.json({
                success: true,
                message: 'successfully find products',
                data: products
            })
        }

        products = await Product.find({});

        if (products) {
            res.json({
                success: true,
                message: 'successfully find products',
                data: products
            })
        } else {
            res.json({
                success: false,
                error: 'could not find products'
            })
        }


    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error.message
        })
    }
};

module.exports.getSearchProducts = async (req, res) => {
    try {
        const query = req.query?.value;
        const products = await Product.find({ name: new RegExp(query, 'i') });
        res.json({
            success: true,
            message: 'successfully got the product',
            data: products
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error.message
        })
    }
}

