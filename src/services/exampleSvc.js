module.exports.fn1 = function(){
    this.debug("print log debug");
    this.info("print log info");
    this.warn("print log warn");
    this.error("print log error");
}

module.exports.fn2 = function(param){
    this.debug("print log debug param=", param);    
}

module.exports.obj1 ={
    "foo":"bar"
}

