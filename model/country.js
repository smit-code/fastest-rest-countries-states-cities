const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countrySchema = new Schema({
    id: {
        $numberInt: {
            type: Date
        }
    },
    name: {
        type: String
    },
    iso3: {
        type: String
    },
    iso2: {
        type: String
    },
    numeric_code: {
        type: Date
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
        type:Object
    },
    latitude: {
        type: String
    },
    longitude: {
        type: String
    },
    emoji: {
        type: String
    },
    emojiU: {
        type: String
    }
});

module.exports = mongoose.model('Country',countrySchema);