const { fetchProblemDetails } = require('../apis/problemAdminApi');
const SubmissionProducer = require('../producers/submissionQueueProducer')
class SubmissionService{
    constructor(submissionRepository){
        //inject here
        this.submissionRepository=submissionRepository;
    }
    async pingCheck(){
        return 'pong'
    }
    async addSubmission(submissionPayload){

        //Hit the problem admin service and fetch the problem details
        //we are going to entry in db
        const problemId = submissionPayload.problemId;
        const userId = submissionPayload.userId;
        console.log("ProblemId:",submissionPayload);
        const problemAdminApiResponse = await fetchProblemDetails(problemId);
        console.log("problemapireposne",problemAdminApiResponse);

        if(!problemAdminApiResponse){
            throw {message: 'Not able to create submission'};
        }
        console.log(problemAdminApiResponse.data.codeStubs);
        const languageCodeStubs = problemAdminApiResponse.data.codeStubs.find(codeStubs=>codeStubs.language.toLowerCase() == submissionPayload.language.toLowerCase());
        console.log('languageCodeStubs',languageCodeStubs);

        submissionPayload.code = languageCodeStubs.startSnippet+'\n\n'+submissionPayload.code +'\n\n'+
        languageCodeStubs.endSnippet;
       
        const submission = await this.submissionRepository.createSubmission(submissionPayload);
        if(!submission){
            //TODO: Add error handling here
            throw {message: 'Not able to create submission'};
        }
        console.log(submission);
        const response = await SubmissionProducer({
            [submission._id]:{
                code:submission.code,
                language:submission.language,
                inputCase:problemAdminApiResponse.data.testCases[0].input,
                outputCase:problemAdminApiResponse.data.testCases[0].output,
                userId,
                submissionId:submission._id
            }
        });

        //TODO: add handling of all test case here
        return {queueResponse:response, submission};
    }
}
module.exports=SubmissionService