const {getCountiesStatesCities, getCountryStatesCities} = require('../controllers/countryStateCityController');

async function routes (fastify,option) {

    fastify.get('/', getCountiesStatesCities);

    fastify.get('/:country', getCountryStatesCities);

}

module.exports = routes;