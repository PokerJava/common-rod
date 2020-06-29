module.exports.initCommonLog = async function(req,res,next) {
    
    //Shortcut to create detail and summary
    let identity = req.headers["x-session-id"] + req.headers["x-rtid"] + req.headers["x-tid"];
    this.commonLogAsync(req, this.cmd, identity);  //create detail and summary
    //create detail and summary without identity
    //this.commonLog(req, this.cmd);   //create detail and summary, skip identity
    //create detail and summary with default cmd (this.cmd)
    //this.commonLog(req);             //create detail and summary, use this.cmd and skipidentity

    // OR 
    // create summary
    // let summary = this.summary('initInvoke', cmd, 'identity');
    // create detail
    // let detail = this.detail('initInvoke', cmd, 'identity');


    
    this.summary().addSuccessBlock("client", this.cmd, null, "success"); 
    res.json({resultCode:"20000",developerMessage:"success"});

    //MAKE SURE YOU HAVE TO ADD THIS LINE AFTER send response
    await this.waitFinished(); 
    //coding...
};