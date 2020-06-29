module.exports.gettingAppConf = async function(req,res,next) {
    

    let envConf1 = this.utils().app().conf("example_config_1"); //get from env.app.exampleConfig1
    let envConf2 = this.utils().app().conf("example_config_2"); //get from env.app.exampleConfig2

    let const_config_1 = this.utils().app().const("const_config_1"); //get from /conf/config.json.const_config_1
    let const_config_2 = this.utils().app().const("const_config_2"); //get from /conf/config.json.const_config_2
    this.debug("example_config_1",envConf1);
    this.debug("example_config_2",envConf2);
    this.debug("const_config_1",const_config_1);
    this.debug("const_config_2",const_config_2);
    return res.json({resultCode:"20000",developerMessage:"success"});
};