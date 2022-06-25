const {getCountiesStatesCities, getCountryStatesCities} = require('../controllers/countryStateCityController');
const errorHandler = require("../utils/errorHandler");
const globalSchema = require("../utils/responseSchema");
const use = (fn) => (request, replay) => {
    Promise.resolve(fn(request, replay)).catch(error => errorHandler(error,request,replay));
}
async function routes (fastify,option) {
    const schema = globalSchema.schema('country');
    fastify.get('/', {schema}, use(getCountiesStatesCities));

    fastify.get('/:country', {schema}, use(getCountryStatesCities));
}

module.exports = routes;