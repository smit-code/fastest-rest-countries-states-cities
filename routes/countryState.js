const {getCountiesStates, getCountryStates} = require('../controllers/countryStateController');

async function routes (fastify,option) {

    fastify.get('/', getCountiesStates);

    fastify.get('/:country', getCountryStates);

}

module.exports = routes;