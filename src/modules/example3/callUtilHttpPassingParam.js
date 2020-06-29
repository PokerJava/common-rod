module.exports.callUtilHttpPassingParam = async function(req,res,next) {
    
    this.commonLog(req);

    // call http request #axios
    let result = await this.utils().http().request({
        method : "post",
        headers : {
            "x-header-a" : "header value a"
            // "X-Tid":"examp-20191010sDmv1d2x"    //optional, if not present app will generating
        },
        data : {                        //body
            "foo" : req.query.foo
        },
        params : {                      //queryString (DO NOT encode)
            "foo": "value"
        },
        subUrlParams: {
            "subUrlFoo1":"bar1",
            "subUrlFoo2":"bar2",
        },
        // timeout : 10,                //optional, if not set app will get from env.service.$_service.$_command.timeout
        // url : "http://be:8080/uri",  //optional, if not set app will get from env.service.$_service.$_command
        _service : "node_be",                       //env.service.node_be
        _command : "examplePassingSubUrl"            //env.service.node_be.examplePassingSubUrl
    });

    //check http response 
    if(this.utils().http().isError(result)){
        //error (timeout OR connect error)
    } else {
        //response success
    }
};