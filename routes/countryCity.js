const {getCountiesCities, getCountryCities} = require('../controllers/countryCityController');
const errorHandler = require("../utils/errorHandler");
const {schema} = require("../utils/responseSchema");
const use = (fn) => (request, replay) => {
    Promise.resolve(fn(request, replay)).catch(error => errorHandler(error,request,replay));
}
async function routes (fastify,option) {

    fastify.get('/', {schema}, use(getCountiesCities));

    fastify.get('/:name', {schema}, use(getCountryCities));

}

module.exports = routes;