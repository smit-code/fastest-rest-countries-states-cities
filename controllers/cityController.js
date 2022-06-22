const City = require("../model/city");
const {helper} = require("../utils/findByNameHelper");

exports.getCities = async (request,replay) => {
    try {
        const data = await City.find();
        return replay.send({
            result:data
        });
    } catch (error) {
        return replay.send(error)
    }
};

exports.getCity = async (request,replay) => {
    try {
        const queryCity = request.params.city;

        // for country wise states
        let data = await helper(queryCity,City);
        return replay.send(data);
    } catch (error) {
        return replay.send(error)
    }
};