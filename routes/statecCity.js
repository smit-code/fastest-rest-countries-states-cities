const {getStatesCities, getStateCities} = require('../controllers/stateCityController');
const errorHandler = require("../utils/errorHandler");
const {schema} = require("../utils/responseSchema");
const use = (fn) => (request, replay) => {
    Promise.resolve(fn(request, replay)).catch(error => errorHandler(error, request, replay));
}

async function routes(fastify, option) {

    fastify.get('/', {schema}, use(getStatesCities));

    fastify.get('/:state', {schema}, use(getStateCities));

}

module.exports = routes;