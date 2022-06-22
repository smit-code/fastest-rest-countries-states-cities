const stateController = require('../controllers/stateController');

async function routes (fastify,option) {

    fastify.get('/',stateController.getStates);

    fastify.get('/:state',stateController.getState);

}

module.exports = routes;