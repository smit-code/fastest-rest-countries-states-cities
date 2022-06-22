const {getCountiesCities, getCountryCities} = require('../controllers/countryCityController');

async function routes (fastify,option) {

    fastify.get('/', getCountiesCities);

    fastify.get('/:country', getCountryCities);

}

module.exports = routes;