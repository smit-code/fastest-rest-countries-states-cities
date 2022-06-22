const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StatesCitySchema = new Schema(
    {
        id: {
            type: Number
        },
        name: {
            type: String
        },
        state_code: {
            type: String
        },
        latitude: {
            type: String
        },
        longitude: {
            type: String
        },
        country_id: {
            type: Number
        },
        cities: {
            type: Array
        }
    }
);

module.exports = mongoose.model('states-cities', StatesCitySchema);