module.exports.callUtilMongo = async function(req,res,next) {
    
    this.commonLog(req);

    //this.utils().mongo() will return mongo native connection
    let customers = await this.utils().mongo().collection('customers').find({}).toArray();
    this.debug(customers);


};