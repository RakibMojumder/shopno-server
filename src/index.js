require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');

// ROUTES
const userRoute = require('./routes/user.route');
const productRoute = require('./routes/product.route');

// MIDDLE WARE
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('API is running')
})

// ALL ROUTES
app.use('/user', userRoute);
app.use('/product', productRoute);



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