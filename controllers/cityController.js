const City = require("../model/city");
const {helper} = require("../utils/findByNameHelper");

exports.getCities = async (request, replay) => {
    const cities = await City.find();
    let statusCode = 200;
    if (!cities.length) {
        statusCode = 400
    }
    return replay.status(statusCode).send({
        result: cities
    })
};

exports.getCity = async (request, replay) => {
    const queryCity = request.params.name;
    // for country wise states
    let result = await helper(queryCity, City);
    let statusCode = result.statusCode;

    return replay.status(statusCode).send(result);
};