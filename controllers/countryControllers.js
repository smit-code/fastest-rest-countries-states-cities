const Country = require('../model/country');
const {helper} = require("../utils/findByNameHelper");

exports.getCountries = async (request, replay) => {
    try {
        const data = await Country.find();
        return replay.send({
            result: data
        });
    } catch (error) {
        return replay.send(error)
    }
};

exports.getCountry = async (request, replay) => {
    try {
        const queryCountry = request.params.country;

        // for country wise states
        let data = await helper(queryCountry,Country);
        return replay.send(data);

    } catch (error) {
        return replay.send(error)
    }
};