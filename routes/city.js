const {getCities, getCity} = require('../controllers/cityController');

async function routes (fastify,option) {

    fastify.get('/', getCities);

    fastify.get('/:city', getCity);

}

module.exports = routes;