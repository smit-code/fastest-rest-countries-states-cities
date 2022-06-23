const {getCountiesStates, getCountryStates} = require('../controllers/countryStateController');
const errorHandler = require("../utils/errorHandler");
const {schema} = require("../utils/responseSchema");
const use = (fn) => (request, replay) => {
    Promise.resolve(fn(request, replay)).catch(error => errorHandler(error,request,replay));
}
async function routes (fastify,option) {

    fastify.get('/', {schema}, use(getCountiesStates));

    fastify.get('/:country', {schema}, use(getCountryStates));

}

module.exports = routes;