const {getCountries, getCountry} = require("../controllers/countryControllers");
const errorHandler = require("../utils/errorHandler");
const globalSchema = require("../utils/responseSchema");
const use = (fn) => (request, replay) => {
    Promise.resolve(fn(request, replay)).catch(error => errorHandler(error,request,replay));
}
async function routes(fastify, option) {
    // const schema = ;
    fastify.get('', {schema:globalSchema.primarySchema()}, use(getCountries));

    // fastify.get('/:country',{schema:globalSchema.secondarySchema('country')}, use(getCountry));
}

module.exports = routes;