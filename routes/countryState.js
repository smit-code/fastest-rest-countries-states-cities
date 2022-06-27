const {getCountiesStates, getCountryStates} = require('../controllers/countryStateController');
const errorHandler = require("../utils/errorHandler");
const {primarySchema,secondarySchema} = require("../utils/responseSchema");
const use = (fn) => (request, replay) => {
    Promise.resolve(fn(request, replay)).catch(error => errorHandler(error,request,replay));
}
async function routes (fastify,option) {
    fastify.get('/', {schema:primarySchema()}, use(getCountiesStates));

    fastify.get('/:country', {schema:secondarySchema('country')}, use(getCountryStates));
}

module.exports = routes;