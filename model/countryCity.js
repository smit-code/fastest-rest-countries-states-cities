const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CountryCitySchema = new Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    },
    state_id: {
        type: Number
    },
    state_code: {
        type: String
    },
    state_name: {
        type: String
    },
    country_id: {
        type: Number
    },
    country_code: {
        type: String
    },
    country_name: {
        type: String
    },
    latitude: {
        type: String
    },
    longitude: {
        type: String
    },
    wikiDataId: {
        type: String
    },
    iso3: {
        type: String
    },
    iso2: {
        type: String
    },
    numeric_code: {
        type: String
    },
    phone_code: {
        type: Date
    },
    capital: {
        type: String
    },
    currency: {
        type: String
    },
    currency_name: {
        type: String
    },
    currency_symbol: {
        type: String
    },
    tld: {
        type: String
    },
    native: {
        type: String
    },
    region: {
        type: String
    },
    subregion: {
        type: String
    },
    timezones: {
        type: Array
    },
    translations: {
        type: Object
    },
    emoji: {
        type: String
    },
    emojiU: {
        type: String
    },
    cities: {
        type: Array
    }

});

module.exports = mongoose.model('countries-cities', CountryCitySchema);