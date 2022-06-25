const {getCountiesCities, getCountryCities} = require('../controllers/countryCityController');
const errorHandler = require("../utils/errorHandler");
const globalSchema = require("../utils/responseSchema");
const use = (fn) => (request, replay) => {
    Promise.resolve(fn(request, replay)).catch(error => errorHandler(error,request,replay));
}
async function routes (fastify,option) {
    const schema = globalSchema.schema('country');
    fastify.get('/', {schema}, use(getCountiesCities));

    fastify.get('/:country', {schema}, use(getCountryCities));
}

module.exports = routes;