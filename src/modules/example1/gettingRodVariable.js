module.exports.gettingRodVariable = async function(req,res,next) {
    let cmd = this.cmd; //cmd == example1
    let app = this.app; //express
    let logger = this.logger; //commonlog-kb
    let appName = this.appName; //env.commonLog.projectName
    let sessionID = this.sessionID;

    this.debug("cmd=", cmd);
    this.debug("appName=", appName);
    this.debug("sessionID=", sessionID);
    
    this.debug("print log info");
    this.info("print log info");
    this.warn("print log warn");
    this.error("print log error");
  
    return res.json({resultCode:"20000",developerMessage:"success"});
};