const {getStates,getState} = require('../controllers/stateController');

async function routes (fastify,option) {

    fastify.get('/',getStates);

    fastify.get('/:state',getState);

}

module.exports = routes;