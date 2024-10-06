const app = require("./app");
const connectToDB = require("./config/dbConfig");
const fastify = require("fastify")({ logger: true });//called the fastify constructor
const serverConfig = require("./config/serverConfig")


fastify.register(app);

fastify.listen({ port: serverConfig.PORT },async function (err) {
    console.log(err);
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
    await connectToDB();
    // Server is now listening on ${address}
    console.log('Server up at port', serverConfig.PORT);
  })

