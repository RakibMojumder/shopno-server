const mongoose = require('mongoose');

const divisionSchema = mongoose.Schema({
    name: String,
    country: String
});

module.exports = mongoose.model('divisions', divisionSchema);