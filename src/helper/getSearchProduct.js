const Product = require('../models/product');

module.exports.getSearchProduct = async (query, limit) => {
    const { value, price, categories, sort, page } = query;

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
    totalProducts = await Product.find({ $and: filter })
    if (sort) {
        if (totalProducts.length > limit) {
            products = await Product.find({ $and: filter }).sort(sort).skip(parseInt(page) * limit).limit(limit)
        } else {
            products = await Product.find({ $and: filter }).sort(sort);
        }
    } else {
        if (totalProducts.length > limit) {
            products = await Product.find({ $and: filter }).skip(parseInt(page) * limit).limit(limit)
        } else {
            products = await Product.find({ $and: filter });
        }
    }

    return { products, totalProducts };
};
