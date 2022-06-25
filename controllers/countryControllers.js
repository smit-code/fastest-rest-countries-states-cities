const Country = require('../model/country');
const {helper} = require("../utils/findByNameHelper");

exports.getCountries = async (request, replay) => {
    const countries = await Country.find();
    let statusCode = 200;
    if (!countries.length){
        statusCode = 400
    }
    return replay.status(statusCode).send({
        result: countries
    })
};

exports.getCountry = async (request, replay) => {
    const queryCountry = request.params.country;

    // for country wise states
    let result = await helper(queryCountry, Country);
    let statusCode = result.statusCode;

    return replay.status(statusCode).send(result);
};