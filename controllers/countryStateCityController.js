const CountryStateCity = require('../model/countryStateCity');
exports.getCountiesStatesCities = async (request, replay) => {
    const CountiesStatesCities = await CountryStateCity.find();
    let statusCode = 200;
    if (!CountiesStatesCities.length) {
        statusCode = 400
    }
    return replay.status(statusCode).send({
        result: CountiesStatesCities
    })

};

exports.getCountryStatesCities = async (request, replay) => {
    const queryCountry = request.params.name;
    // for country wise City
    const {helper} = require("../utils/findByNameHelper");

    let result = await helper(queryCountry, CountryStateCity);
    let statusCode = result.statusCode;

    return replay.status(statusCode).send(result);

};