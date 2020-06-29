module.exports.callUtilHttp = async function(req,res,next) {

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
        // timeout : 10,                //optional, if not set app will get from env.service.$_service.$_command.timeout
        // url : "http://be:8080/uri",  //optional, if not set app will get from env.service.$_service.$_command
        _service : "node_be",           //env.service.node_be
        _command : "example"            //env.service.node_be.example
    });

    if(result.data && result.data.resultCode === "20000" && result.data.developerMessage === "success" ){
        this.summary().addErrorBlock("node_be", "example", null, "missing param foo");
        return res.json({resultCode:"20000",developerMessage:"success"});

    }else{
        this.summary().addSuccessBlock("node_be", "example", "20000", "success");
        return res.json({resultCode:"50000",developerMessage:"system_error"});
    }
};