
module.exports.subExample = function(){

    this.debug("submodule");
    
    //get request 
    let sessionId = this.req.headers["x-session-id"]; 
    
    //response to client
    this.res.json({resultCode:"20000",developerMessage:"success"});

    //call middleware
    //this.next();  
}

