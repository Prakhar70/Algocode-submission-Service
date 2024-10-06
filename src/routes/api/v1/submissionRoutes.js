const { createSubmission } = require("../../../controllers/submissionContoller");

async function submissionRoutes(fastify, options) {
  fastify.post("/", createSubmission);
}

module.exports = submissionRoutes;
