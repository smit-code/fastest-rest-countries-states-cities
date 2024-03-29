require('dotenv').config();
const Fastify = require('fastify');
const fastify = Fastify({
    logger: true
});
const cors = require("@fastify/cors")
const {swaggerOptions} = require("./utils/swagger");
const swagger = require("@fastify/swagger");
const port = process.env.PORT || 3000;

fastify.register(cors,{
    origin:true
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
fastify.listen({ port, host: '0.0.0.0' }, (err, address) => {
    if (err) {
        fastify.log.error(err);
        process.exit(1);
    }
})
