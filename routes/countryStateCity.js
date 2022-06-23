const {getCountiesStatesCities, getCountryStatesCities} = require('../controllers/countryStateCityController');
const errorHandler = require("../utils/errorHandler");
const {schema} = require("../utils/responseSchema");
const use = (fn) => (request, replay) => {
    Promise.resolve(fn(request, replay)).catch(error => errorHandler(error,request,replay));
}
async function routes (fastify,option) {

    fastify.get('/', {schema}, use(getCountiesStatesCities));

    fastify.get('/:name', {schema}, use(getCountryStatesCities));

}

module.exports = routes;