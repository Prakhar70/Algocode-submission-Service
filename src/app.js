const fastifyPlugin = require("fastify-plugin");
const servicePlugin = require("./services/servicePlugin");

/**
 *
 * @param {Fastify object} fastify
 * @param {*} options
 */
async function app(fastify, options) {
  fastify.register(require("@fastify/cors"));
  
  fastify.register(servicePlugin);

  fastify.register(require("./routes/apiRoutes"), { prefix: "/api" });
}

module.exports = fastifyPlugin(app);
