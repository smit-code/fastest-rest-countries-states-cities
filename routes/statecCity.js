const {getStatesCities, getStateCities} = require('../controllers/stateCityController');
const errorHandler = require("../utils/errorHandler");
const{primarySchema,secondarySchema} = require("../utils/responseSchema");
const use = (fn) => (request, replay) => {
    Promise.resolve(fn(request, replay)).catch(error => errorHandler(error, request, replay));
}

async function routes(fastify, option) {
    fastify.get('/', {schema:primarySchema()}, use(getStatesCities));

    fastify.get('/:state', {schema:secondarySchema('state')}, use(getStateCities));
}

module.exports = routes;