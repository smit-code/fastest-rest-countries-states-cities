const State = require("../model/state");
const {helper} = require("../utils/findByNameHelper");

exports.getStates = async (request,replay) => {
    try {
        const states = await State.find();
        return replay.send({
            result:states
        });
    } catch (error) {
        return replay.send(error)
    }
};

exports.getState = async (request,replay) => {
    try {
        const queryState = request.params.state;

        // for country wise states
        let data = await helper(queryState,'state');
        return replay.send(data);

    } catch (error) {
        return replay.send(error)
    }
};