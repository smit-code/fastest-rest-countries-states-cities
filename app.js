require('dotenv').config();
const Fastify = require('fastify');
const fastify = Fastify({
    logger: true
});
const PORT = process.env.PORT;
const swagger = require("./utils/swagger");

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

// fastify.register(require('@fastify/cors'), function (instance) {
//     return (req, callback) => {
//         // let corsOptions;
//         // const origin = req.headers.origin
//         // console.log("this is origin",origin);
//         // do not include CORS headers for requests from localhost
//         // const hostname = new URL(origin).hostname
//         // if (hostname === "localhost") {
//         //     corsOptions = {origin: false}
//         // } else {
//         //     corsOptions = {origin: true}
//         // }
//         callback(null, {origin: "*"}) // callback expects two parameters: error and options
//     }
// })

//db Connection
fastify.register(require('./config/db'));

//fastify swagger
fastify.register(require('@fastify/swagger'),swagger.options);

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
fastify.listen({ port: PORT })