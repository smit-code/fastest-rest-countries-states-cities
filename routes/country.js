const {getCountries, getCountry} = require("../controllers/countryControllers");

async function routes(fastify, option) {

    fastify.get('/', getCountries);

    fastify.get('/:country', getCountry);

}

module.exports = routes;