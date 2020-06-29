module.exports.increaseStat = async function(req,res,next) {
    this.stat('example stat'); //increase stat
    return res.json({resultCode:"20000",developerMessage:"success"});
};