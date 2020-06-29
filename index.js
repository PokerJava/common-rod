//require and start immediately
// let app = require('common-rod')();

//OR
let commonRodOpt = {
    mongo_create_connect:false,
    detaillog_add_output_response:true,
    summarylog_auto_end:true
}; //optional

let cb_BeforeRunServer = function (){
    this.debug("log log log");
    let startServer = true;
    return startServer
}

let commonRod = require('common-rod');
let app = commonRod(cb_BeforeRunServer, commonRodOpt);


app.session = function(req, res){
    return req.headers["x-tid"] || req.invoke;
}