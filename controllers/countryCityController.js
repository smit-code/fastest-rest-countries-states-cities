const CountryCity = require('../model/countryCity');
const {helper} = require("../utils/findByNameHelper");

exports.getCountiesCities = async (request, replay) => {
    const CountiesCities = await CountryCity.find();
    let statusCode = 200;
    if (!CountiesCities.length) {
        statusCode = 400
    }
    return replay.status(statusCode).send({
        result: CountiesCities
    })

};

exports.getCountryCities = async (request, replay) => {
    const queryCountry = request.params.name;

    // for country wise states
    let result = await helper(queryCountry, CountryCity);
    let statusCode = result.statusCode;

    return replay.status(statusCode).send(result);
};