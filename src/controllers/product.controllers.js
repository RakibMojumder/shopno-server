const Product = require('../models/product');
const Division = require('../models/division');
const District = require('../models/district');

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

        products = await Product.aggregate([{ $sample: { size: 50 } }])
        // products = await Product.find({}).limit(10);

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
        const { value, price, categories, sort, page } = req.query;

        let filter = [
            { price: { $gte: parseInt(price.split(',')[0]) } },
            { price: { $lte: parseInt(price.split(',')[1]) } },
        ];
        if (value) filter.push({
            $or: [
                { name: new RegExp(value, 'i') },
                { category: new RegExp(value, 'i') },
            ]
        });
        if (categories) filter.push({ category: { $in: categories.split(',') } });

        let products;
        let totalProducts;
        if (sort) {
            totalProducts = await Product.find({ $and: filter })
            products = await Product.find({ $and: filter }).sort(sort).skip(parseInt(page) * 15).limit(15)
        } else {
            totalProducts = await Product.find({ $and: filter })
            products = await Product.find({ $and: filter }).skip(parseInt(page) * 15).limit(15)
        }

        res.json({
            success: true,
            data: products,
            totalPage: Math.ceil(totalProducts.length / 15),
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