const StateCity = require('../model/stateCity');
const {helper} = require("../utils/findByNameHelper");

exports.getStatesCities = async (request, replay) => {
    const statesCities = await StateCity.find();
    let statusCode = 200;
    if (!statesCities.length) {
        statusCode = 400
    }
    return replay.status(statusCode).send({
        result: statesCities
    })
};

exports.getStateCities = async (request, replay) => {
    const queryState = request.params.state;
    // for country wise states
    let result = await helper(queryState, StateCity);
    let statusCode = result.statusCode;

    return replay.status(statusCode).send(result);
};