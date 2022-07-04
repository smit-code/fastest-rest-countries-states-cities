const CountryStates = require('../model/countryState');
const {helper} = require("../utils/findByNameHelper");

exports.getCountiesStates = async (request, replay) => {
    const countiesStates = await CountryStates.find();
    let statusCode = 200;
    if (!countiesStates.length) {
        statusCode = 400
    }
    return replay.status(statusCode).send({
        result: countiesStates
    })

};

exports.getCountryStates = async (request, replay) => {
    const queryCountry = request.params.country;
    // for country wise states
    let result = await helper(queryCountry, CountryStates);
    let statusCode = result.statusCode;

    return replay.status(statusCode).send(result);
};