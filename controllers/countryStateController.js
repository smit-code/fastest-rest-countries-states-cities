const CountryStates = require('../model/countryState');
const {helper} = require("../utils/findByNameHelper");

exports.getCountiesStates = async (request,replay) => {
    try {
        const CountiesStates = await CountryStates.find();
        return replay.send({
            result:CountiesStates
        });
    } catch (error) {
        return replay.send(error)
    }
};

exports.getCountryStates = async (request,replay) => {
    try {
        const queryCountry = request.params.country;
        // for country wise states
        let data = await helper(queryCountry,CountryStates);
        return replay.send(data);
    } catch (error) {
        return replay.send(error)
    }
};