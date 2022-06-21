const Fastify = require('fastify')

const fastify = Fastify({
    logger: true
})

const PORT = process.env.PORT || 80;

fastify.register(require('fastify-swagger'), {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
        info: { title: 'fastify-api' },
    },
})

// Database initialize
fastify.register(require('./config/db'));

// Declare a route
fastify.register(require('./routes/index'));

// Run the server!
fastify.listen(PORT, (err, address) => {
    if (err) throw err
})