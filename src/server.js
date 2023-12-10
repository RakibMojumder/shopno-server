require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const fileUploader = require('express-fileupload');
const { v2: cloudinary } = require('cloudinary');


// CONFIG CLOUDINARY
cloudinary.config({
    cloud_name: process.env.CLOUDE_NAME,
    api_key: process.env.CLOUDE_API_KEY,
    api_secret: process.env.CLOUDE_API_SECRET
});

// ROUTES IMPORTS
const userRoute = require('./routes/user.route');
const productRoute = require('./routes/product.route');
const paymentRoute = require('./routes/payment.route');
const orderRoute = require('./routes/order.route');
const adminRoute = require('./routes/admin.route');

// MIDDLE WARE
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// FILE UPLOAD
app.use(fileUploader({ useTempFiles: true }));

app.get('/', (req, res) => {
    res.send('API is running')
})

// ALL ROUTES
app.use('/user', userRoute);
app.use('/product', productRoute);
app.use('/payment', paymentRoute);
app.use('/order', orderRoute);
app.use('/admin', adminRoute);


//---------------------ERROR HANDLING---------------------
// ROUTE ERROR
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' })
});

// SERVER ERROR
app.use((err, req, res, next) => {
    res.status(500).send('Something is broken')
})



module.exports = app;