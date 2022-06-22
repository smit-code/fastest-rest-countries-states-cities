const {getStatesCities, getStateCities} = require('../controllers/stateCityController');

async function routes (fastify,option) {

    fastify.get('/', getStatesCities);

    fastify.get('/:state', getStateCities);

}

module.exports = routes;