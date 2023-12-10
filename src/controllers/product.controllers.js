const Product = require('../models/product');
const Division = require('../models/division');
const District = require('../models/district');
const { getSearchProduct } = require('../helper/getSearchProduct');

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

        products = await Product.aggregate([{ $sample: { size: 35 } }])

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
        const { products, totalProducts } = await getSearchProduct(req.query, 20);

        res.json({
            success: true,
            data: products,
            totalPage: Math.ceil(totalProducts.length / 20),
            message: 'successfully got the product',
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error.message
        })
    }
}


module.exports.getAllDivisions = async (req, res) => {
    try {
        const divisions = await Division.find({});

        res.json({
            success: true,
            message: 'successfully got the divisions',
            data: divisions
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error.message
        })
    }
}


module.exports.getAllDistricts = async (req, res) => {
    try {
        const division = req.query.division;
        const districts = await District.find({ division });

        res.json({
            success: true,
            message: 'successfully got the districts',
            data: districts
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error.message
        })
    }
}


module.exports.getBestSellerProduct = async (req, res) => {
    try {
        const products = await Product.find({}).sort('-totalRating').limit(10);
        res.json({
            success: true,
            message: 'successfully got the products',
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