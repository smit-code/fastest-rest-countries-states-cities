const {
    getCountries,
    getCountry,
} = require('../controllers/countryControllers');

// Item schema
const getCountriesOpts = {
    type: 'object',
    properties: {
        id: {type: 'string'},
        name: {type: 'string'},
    },
    handler: getCountries,
}

// Options for get all items
const getCountryOpts = {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    id: {type: 'string'},
                    name: {type: 'string'},
                }
            },
        },
    },
    handler: getCountry,
}

exports.countryRoutes = ((fastify, options, done) => {
    // Get all items
    fastify.get('/', getCountriesOpts);

    // Get single items
    fastify.get('/:id', getCountryOpts);

    done();
});