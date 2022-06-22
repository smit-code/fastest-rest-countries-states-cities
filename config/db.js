const fastifyPlugin = require('fastify-plugin');

async function dbConnect(fastify,option){

    const mongoose = require('mongoose')

    mongoose.connect(process.env.MONGO_URL);

    const db = mongoose.connection;

    db.on('error',console.error.bind(console,"failed to connect database"));

    db.once('open',() => {
        console.log("successfully connected to database..");
    })
}

module.exports = fastifyPlugin(dbConnect);