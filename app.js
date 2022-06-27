require('dotenv').config();
const Fastify = require('fastify');
const fastify = Fastify({
    logger: true
});
const PORT = process.env.PORT || 3000;
const {swaggerOptions} = require("./utils/swagger");
const swagger = require("@fastify/swagger");

// env configuration
// const fastifyEnv = require('@fastify/env')
// const schema = {
//     type: 'object',
//     properties: {
//         MONGO_URL: {
//             type: 'string'
//         },
//         PORT: {
//             type: 'number'
//         }
//     },
//     required: ['MONGO_URL', 'PORT']
// }
// const options = {
//     dotenv: true,
//     confKey: 'config',
//     schema: schema,
// }
//
// fastify.register(fastifyEnv, options).ready((err, data) => {
// // Run the server!
//     const PORT = process.env.PORT;
//
//     const start = async () => {
//         try {
//             await fastify.listen({port: PORT})
//         } catch (err) {
//             fastify.log.error(err)
//             process.exit(1)
//         }
//     }
//     start()
// })

fastify.register(require('@fastify/cors'), function (instance) {
    return (req, callback) => {
        let corsOptions;
        // const origin = req.headers.host
        // console.log("this is origin",origin);
        // do not include CORS headers for requests from localhost
        const hostname = req.headers.host;
        if (hostname === "localhost" && hostname === "127.0.0.1:3000") {
            corsOptions = {origin: false}
        } else {
            corsOptions = {origin: true}
        }
        callback(null, corsOptions) // callback expects two parameters: error and options
    }
})

//db Connection
fastify.register(require('./config/db'));

//fastify swagger
fastify.register(swagger,swaggerOptions);

// Declare a route
const {routes} = require('./routes/index');
fastify.register(routes,{prefix: '/'})

//error handler for url not found
fastify.setErrorHandler(function (error, request, reply) {
    // Log error
    this.log.error(error)
    // Send error response
    reply.status(404).send({ success: false,message:"requested API not valid !" })
})

// Run the server!
fastify.listen({ port: PORT }, function (err, address) {
    if (err) {
        fastify.log.error(err)
        process.exit(1)
    }
    // Server is now listening on ${address}
})

// Run the server!
// fastify.listen({ port: PORT })