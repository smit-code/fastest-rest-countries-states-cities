const {getStates,getState} = require('../controllers/stateController');
const errorHandler = require("../utils/errorHandler");
const {schema} = require("../utils/responseSchema");
const use = (fn) => (request, replay) => {
    Promise.resolve(fn(request, replay)).catch(error => errorHandler(error,request,replay));
}
async function routes (fastify,option) {

    fastify.get('/', {schema},use(getStates));

    fastify.get('/:name', {schema},use(getState));

}

module.exports = routes;