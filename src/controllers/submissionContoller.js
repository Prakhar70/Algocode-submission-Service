
async function pingRequest(req, res) {

    //console.log(this)
    const response = await this.testService.pingCheck();
    return res.send({ data: response });
}
// TODO:Add validation layer
async function createSubmission(req, res){
    console.log("Submission controller");
    const response = await this.submissionService.addSubmission(req.body);
    return res.status(201).send({
        error:{},
        data:response,
        success:true,
        message:'Created success sucessfully'
    })

}

module.exports = {
    pingRequest,
    createSubmission
};
