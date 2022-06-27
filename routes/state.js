const {getStates,getState} = require('../controllers/stateController');
const errorHandler = require("../utils/errorHandler");
const globalSchema = require("../utils/responseSchema");
const use = (fn) => (request, replay) => {
    Promise.resolve(fn(request, replay)).catch(error => errorHandler(error,request,replay));
}
async function routes (fastify,option) {
    fastify.get('/', {schema:globalSchema.primarySchema()},use(getStates));

    fastify.get('/:state', {schema:globalSchema.secondarySchema('state')},use(getState));
}

module.exports = routes;