module.exports.validateParam = function(req){
    this.debug("validate body");
    if(req && req.body && req.body.foo && req.body.foo === "bar"){
        this.info("body validate success");
        return true;
    }else{
        this.info("body validate fail");
        return false;
    }
    
}