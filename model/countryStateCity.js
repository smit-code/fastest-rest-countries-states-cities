const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countryStateCitySchema = new Schema({
    country: {
        type: String
    },
    state: {
        type: Number
    },

});

module.exports = mongoose.model('Product', countryStateCitySchema);