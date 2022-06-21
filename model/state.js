const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StateSchema = new Schema({
    id: {
        $numberInt: {
            type: Date
        }
    },
    name: {
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
    state_code: {
        type: String
    },
    type: {
        type: Mixed
    },
    latitude: {
        type: String
    },
    longitude: {
        type: String
    }
});

module.exports = mongoose.model('State',StateSchema);