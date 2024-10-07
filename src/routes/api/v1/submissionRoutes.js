const { createSubmission } = require("../../../controllers/submissionContoller");

async function submissionRoutes(fastify, options) {
  console.log('submission routes')
  fastify.post("/", createSubmission);
}

module.exports = submissionRoutes;
