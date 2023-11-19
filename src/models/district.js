const mongoose = require('mongoose');

const districtSchema = mongoose.Schema({
    name: String,
    division: String,
    country: String,
    latitude: String,
    longitude: String
}, { timestamp: true });


module.exports = mongoose.model('districts', districtSchema);