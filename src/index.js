const app = require("./app");

const fastify = require("fastify")({ logger: true });//called the fastify constructor

const PORT = 3000;

fastify.register(app);

fastify.listen({ port: PORT }, function (err) {
    console.log(err);
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    // Server is now listening on ${address}
    console.log('Server up at port', PORT);
  })

