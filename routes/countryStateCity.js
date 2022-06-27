const {getCountiesStatesCities, getCountryStatesCities} = require('../controllers/countryStateCityController');
const errorHandler = require("../utils/errorHandler");
const {primarySchema,secondarySchema} = require("../utils/responseSchema");
const use = (fn) => (request, replay) => {
    Promise.resolve(fn(request, replay)).catch(error => errorHandler(error,request,replay));
}
async function routes (fastify,option) {
    fastify.get('/', {schema:primarySchema()}, use(getCountiesStatesCities));

    fastify.get('/:country', {schema:secondarySchema('country')}, use(getCountryStatesCities));
}

module.exports = routes;