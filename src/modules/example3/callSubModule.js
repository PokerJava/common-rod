module.exports.callSubModule = async function(req,res,next) {
    
    let subExample = this.utils().submodules('exampleSubModule').modules('subExample');

    //build response in submodule
};