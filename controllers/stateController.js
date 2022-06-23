const State = require("../model/state");
const {helper} = require("../utils/findByNameHelper");

exports.getStates = async (request, replay) => {
    const states = await State.find();
    let statusCode = 200;
    if (!states.length) {
        statusCode = 400
    }
    return replay.status(statusCode).send({
        result: states
    })
};

exports.getState = async (request, replay) => {
    const queryState = request.params.name;

    // for country wise states
    let result = await helper(queryState, State);
    let statusCode = result.statusCode;

    return replay.status(statusCode).send(result);
};