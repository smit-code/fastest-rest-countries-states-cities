const {getStates,getState} = require('../controllers/stateController');
const errorHandler = require("../utils/errorHandler");
const globalSchema = require("../utils/responseSchema");
const use = (fn) => (request, replay) => {
    Promise.resolve(fn(request, replay)).catch(error => errorHandler(error,request,replay));
}
async function routes (fastify,option) {
    const schema = globalSchema.schema('state');
    fastify.get('/', {schema},use(getStates));

    fastify.get('/:state', {schema},use(getState));
}

module.exports = routes;