const testController = require('../../../../controllers/testController')


// For routes you dont need to make fastify plugin, 
//directly supported by fastify for being registered as plugin

async function testRoute(fastify, options) {
  fastify.get("/ping", testController.pingRequest);
}

module.exports = testRoute;
