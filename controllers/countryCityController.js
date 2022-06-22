const CountryCity = require('../model/countryCity');
const {helper} = require("../utils/findByNameHelper");

exports.getCountiesCities = async (request,replay) => {
    try {
        const CountiesCities = await CountryCity.find();
        return replay.send({
            result:CountiesCities
        });
    } catch (error) {
        return replay.send(error)
    }
};

exports.getCountryCities = async (request,replay) => {
    try {
        const queryCountry = request.params.country;

        // for country wise states
        let data = await helper(queryCountry,CountryCity);
        return replay.send(data);
    } catch (error) {
        return replay.send(error)
    }
};