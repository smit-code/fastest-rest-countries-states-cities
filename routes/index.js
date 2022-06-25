const countryRoutes = require('./country');
const stateRoutes = require('./state');
const cityRoutes = require('./city');
const countryStateRoutes = require('./countryState');
const countryCityRoutes = require('./countryCity');
const statesCityRoutes = require('./statecCity');
const countryStateCityRoutes = require('./countryStateCity');

exports.routes = async (fastify, option) =>  {

    fastify.register(countryRoutes, {
        prefix: '/countries'
    });
    // fastify.register(stateRoutes, {
    //     prefix: '/states'
    // });
    // fastify.register(cityRoutes, {
    //     prefix: '/cities'
    // });
    // fastify.register(countryStateRoutes, {
    //     prefix: '/countries-states'
    // });
    // fastify.register(countryCityRoutes, {
    //     prefix: '/countries-cities'
    // });
    // fastify.register(statesCityRoutes, {
    //     prefix: '/states-cities'
    // });
    // fastify.register(countryStateCityRoutes, {
    //     prefix: '/countries-states-cities'
    // });

}