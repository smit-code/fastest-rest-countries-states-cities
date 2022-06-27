const {getCountiesCities, getCountryCities} = require('../controllers/countryCityController');
const errorHandler = require("../utils/errorHandler");
const {primarySchema,secondarySchema} = require("../utils/responseSchema");
const use = (fn) => (request, replay) => {
    Promise.resolve(fn(request, replay)).catch(error => errorHandler(error,request,replay));
}
async function routes (fastify,option) {
    fastify.get('/', {schema:primarySchema}, use(getCountiesCities));

    fastify.get('/:country', {schema:secondarySchema('country')}, use(getCountryCities));
}

module.exports = routes;