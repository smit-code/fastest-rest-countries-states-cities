const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CitySchema = new Schema({
    id: {
        $numberInt: {
            type: Date
        }
    },
    name: {
        type: String
    },
    state_id: {
        $numberInt: {
            type: Date
        }
    },
    state_code: {
        type: String
    },
    state_name: {
        type: String
    },
    country_id: {
        $numberInt: {
            type: Date
        }
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
    }
});

module.exports = mongoose.model('City',CitySchema);