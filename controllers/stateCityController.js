const StateCity = require('../model/stateCity');
const {helper} = require("../utils/findByNameHelper");

exports.getStatesCities = async (request,replay) => {
    try {
        const statesCities = await StateCity.find();
        return replay.send({
            result:statesCities
        });
    } catch (error) {
        return replay.send(error)
    }
};

exports.getStateCities = async (request,replay) => {
    try {
        const queryState = request.params.state;
        // for country wise states
        let data = await helper(queryState,'stateCity');
        return replay.send(data);

    } catch (error) {
        return replay.send(error)
    }
};