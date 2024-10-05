async function todoRoutes(fastify, options) {
  fastify.get("/", async (req, res) => {
    return { data: ["todo"] };
  });
}

module.exports = todoRoutes;
