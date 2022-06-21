const {
    getCountries,
    getCountry,
} = require('../controllers/countryControllers');

// Item schema
const getCountries = {
    type: 'object',
    properties: {
        id: {type: 'string'},
        name: {type: 'string'},
    },
    handler: getCountries,
}

// Options for get all items
const getCountry = {
    schema: {
        response: {
            200: {
                type: 'array',
                items: Item,
            },
        },
    },
    handler: getCountry,
}

exports.countryRoutes = ((fastify, options, done)=>{
    // Get all items
    fastify.get('/countries', getCountries);

    // Get single items
    fastify.get('/countries/:id', getCountry);

    done();
});