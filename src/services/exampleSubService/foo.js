module.exports.foo = function(){
    this.debug("LOG@ services.exampleService.foo.js print log debug");
    this.info("LOG@ services.exampleService.foo.js print log info");
    this.warn("LOG@ services.exampleService.foo.js print log warn");
    this.error("LOG@ services.exampleService.foo.js print log error");
}

