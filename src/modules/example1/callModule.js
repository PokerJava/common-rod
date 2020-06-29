module.exports.callModule = async function(req,res,next) {

    //IMPORT SERVICE
    let exampleSvc = this.utils().services('exampleSvc');
    let fn1 = exampleSvc.modules("fn1");      //import modules from src.services.exampleSvc.x
    let fn2 = exampleSvc.modules("fn2");      //import modules from src.services.exampleSvc.y
    let obj1 = exampleSvc.modules("obj1");     //import modules from src.services.exampleSvc.z
    fn1();
    fn2("param1");    
    this.debug("objZ=",obj1);
    
    //IMPORT SERVICE (sub dir)
    let sub_fn_x = this.utils().services('exampleSubService.foo').modules("foo");    //import modules from src.services.exampleSubService.foo.foo()
    sub_fn_x();

    return res.json({resultCode:"20000",developerMessage:"success"});
};