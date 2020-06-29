module.exports.postExample2 = async function(req,res,next) {
    
    this.commonLog(req);    //create detail and summary

    let validateParam = this.utils().services('exampleValidator').modules("validateParam");
    let isValid = validateParam(req);
    let response;

    if(!isValid){
        this.stat('stat name error'); //increase stat
        this.summary().addErrorBlock("client", this.cmd, null, "missing param foo");
        response = {resultCode:"40000",developerMessage:"bad bad bad"};

    }else{
        this.stat('stat name success'); //increase stat
        this.summary().addSuccessBlock("client", this.cmd, "20000", "success");
        response = {resultCode:"20000",developerMessage:"success"};
    }
     

    return res.json(response);
};