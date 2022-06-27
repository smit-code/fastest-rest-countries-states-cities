const {getCities, getCity} = require('../controllers/cityController');
const errorHandler = require("../utils/errorHandler");
const globalSchema = require("../utils/responseSchema");
const use = (fn) => (request, replay) => {
    Promise.resolve(fn(request, replay)).catch(error => errorHandler(error,request,replay));
}
async function routes (fastify,option) {
    fastify.get('/', {schema:globalSchema.primarySchema()}, use(getCities));

    fastify.get('/:city', {schema:globalSchema.secondarySchema('city')}, use(getCity));
}

module.exports = routes;