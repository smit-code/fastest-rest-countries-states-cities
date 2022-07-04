const fastifyPlugin = require('fastify-plugin');

async function dbConnect(fastify,option){

    const mongoose = require('mongoose')

    mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log("Successfully connected to database..");
    }).catch((error)=>{
        console.log("Error in database connection");
        console.log(error);
    })
}

module.exports = fastifyPlugin(dbConnect);