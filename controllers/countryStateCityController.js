const CountryStateCity = require('../model/countryStateCity');
exports.getCountiesStatesCities = async (request,replay) => {
    try {
        const CountiesStatesCities = await CountryStateCity.find();
        return replay.send({
            result:CountiesStatesCities
        });
    } catch (error) {
        return replay.send(error)
    }
};

exports.getCountryStatesCities = async (request,replay) => {
    try {
        const queryCountry = request.params.country;
        // for country wise City
        const {helper} = require("../utils/findByNameHelper");

        let data = await helper(queryCountry,CountryStateCity);

        return replay.send(data);

    } catch (error) {
        return replay.send(error)
    }
};