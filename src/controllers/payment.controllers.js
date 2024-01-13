const mongoose = require('mongoose')
const Order = require('../models/order');
const ObjectId = mongoose.Types.ObjectId;
const stripe = require('stripe')(process.env.STRIPE_sk);
const { format } = require("date-fns");

// SSL COMMERZ IMPORTS
const SSLCommerzPayment = require('sslcommerz-lts')
const store_id = process.env.STORE_ID
const store_passwd = process.env.STORE_PASSWORD
const is_live = false

module.exports.paymentInit = async (req, res) => {
    let totalPrice = 0;
    req.body.products.forEach(product => totalPrice += product.price * product.quantity);

    const transactionId = new ObjectId().toString();

    const data = {
        total_amount: totalPrice + 150,
        currency: 'BDT',
        tran_id: transactionId, // use unique tran_id for each api call
        success_url: `${process.env.SERVER_URL}/payment/success?transactionId=${transactionId}`,
        fail_url: `${process.env.SERVER_URL}/payment/fail?transactionId=${transactionId}`,
        cancel_url: `${process.env.SERVER_URL}/payment/cancel?transactionId=${transactionId}`,
        ipn_url: 'http://localhost:3030/ipn',
        shipping_method: 'Courier',
        product_name: 'Computer.',
        product_category: 'Electronic',
        product_profile: 'general',
        cus_name: req.body.username,
        cus_email: req.body.userEmail,
        cus_add1: req.body.shipment.address,
        cus_add2: 'Dhaka',
        cus_city: req.body.shipment.division,
        cus_state: req.body.shipment.district,
        cus_postcode: req.body.shipment.postCode,
        cus_country: 'Bangladesh',
        cus_phone: req.body.userPhone,
        cus_fax: '01711111111',
        ship_name: 'Customer Name',
        ship_add1: 'Dhaka',
        ship_add2: 'Dhaka',
        ship_city: 'Dhaka',
        ship_state: 'Dhaka',
        ship_postcode: 1000,
        ship_country: 'Bangladesh',
    };

    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
    sslcz.init(data).then(apiResponse => {

        Order.create({
            transactionId,
            paid: false,
            products: req.body.products,
            totalPrice,
            date: format(new Date(), "PP"),
            customerInfo: {
                name: req.body.username,
                email: req.body.userEmail,
                phone: req.body.userPhone,
                district: req.body.shipment.district,
                division: req.body.shipment.district,
                address: req.body.shipment.address,
                postCode: req.body.shipment.postCode
            }
        })

        // Redirect the user to payment gateway
        let GatewayPageURL = apiResponse.GatewayPageURL;
        res.send({ url: GatewayPageURL });
    });
};


module.exports.paymentSuccess = async (req, res) => {
    try {
        const transactionId = req.query.transactionId;
        await Order.findOneAndUpdate({ transactionId }, { paid: true }, { new: true });

        res.redirect(`${process.env.CLIENT_URL}/payment-success?transactionId=${transactionId}`)

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error.message
        })
    }
}


module.exports.paymentFailed = async (req, res) => {
    try {
        const transactionId = req.query.transactionId;
        await Order.findOneAndDelete({ transactionId });
        res.redirect(`${process.env.CLIENT_URL}/payment-failed`)

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error.message
        })
    }
};

module.exports.paymentCancel = async (req, res) => {
    try {
        const transactionId = req.query.transactionId;
        await Order.findOneAndDelete({ transactionId });
        res.redirect(`${process.env.CLIENT_URL}/payment-cancel`);
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error.message
        })
    }
}


// STRIPE PAYMENT

module.exports.createPaymentIntent = async (req, res) => {
    try {
        const price = req.body.totalPrice;
        let token = req.headers?.authorization;
        const amount = Number((parseFloat(price) * 100).toFixed(2));

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
            payment_method_types: ['card']
        })

        res.json({
            success: true,
            clientSecret: paymentIntent.client_secret,
            message: 'Successfully got the client secret'
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }
}


module.exports.stripePayment = async (req, res) => {
    try {
        const order = await Order.create({ ...req.body });

        res.json({
            success: true,
            transactionId: req.body.transactionId,
            date: format(new Date(), "PP"),
            message: 'successfully paid payment'
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }
}