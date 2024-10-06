const Submission = require('../models/submissionModel');

class SubmissionRepository{
    constructor(){
        this.submissionModel = Submission;
    }
    async createSubmission(submission){
        const reponse = await this.submissionModel.create(submission);
        return reponse;
    }
}

module.exports = SubmissionRepository;