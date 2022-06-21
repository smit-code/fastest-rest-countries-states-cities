const  Fastify = require('fastify');
const fastifyEnv = require('@fastify/env');

const fastify = Fastify({
    logger: true
});

const fastifyEnv = require('fastify-env')
const schema = {
    type: 'object',
    required: ['MONGO_URL'],
    properties: {
        MONGO_URL: {
            type: 'string'
        }
    }
}

const options = {
    confKey: 'config',
    schema,
    dotenv: true,
    data: process.env
}

const initialize = async () => {
    fastify.register(fastifyEnv, options)
    await fastify.after()

    // Database
    // Connection URL
    const username = encodeURIComponent(fastify.config.MONGO_URL);
}

initialize()

fastify.register(require('./config/db'))
// Declare a route
fastify.register(require('./routes/index'));


// Run the server!
fastify.listen(3000, (err, address) => {
    if (err) throw err
})