  
const commonRod = require('common-rod');
const callModule = require('../../../src/modules/example1/callModule').callModule;

describe('callModule', () => {
    let mockRod;
    let res;
    let next;
    let req;
    beforeEach(() => {
        mockRod = commonRod.mock();
        req = {};
        res = commonRod.mockExpressRes();
        next = jest.fn();
    })

    test.skip('example skip test case', async () => {
    });

    test('callModule exampleSvc.fn1, exampleSvc.fn2, exampleSvc.obj1', async () => {
        let fn2 = jest.fn();
        mockRod.utils.services.modules.mockImplementation((name)=>{
            if( name === "fn1" ){
                return function(){
                }
            }else if( name === "fn2"){
                return fn2;
            }else if( name === "obj1" ){
                return {"foo":"bar"};
            }else{
                return function(){
                }
            }
        });

        await callModule.call(mockRod, req, res, next).catch((e)=>{
            console.log(e);
        });
        
        expect(mockRod.utils.services).toBeCalledWith('exampleSvc');
        //toHaveBeenNthCalledWith == nthCalledWith
        expect(mockRod.utils.services.modules).toHaveBeenNthCalledWith(1,'fn1');
        expect(mockRod.utils.services.modules).toHaveBeenNthCalledWith(2,'fn2');
        expect(mockRod.utils.services.modules).nthCalledWith(3,'obj1');
        expect(fn2).toBeCalledWith("param1");
    });

    
    test('callSubModule exampleSubService.foo without param', async () => {
        let fooFn = jest.fn();
        mockRod.utils.services.modules.mockImplementation((name)=>{
            return fooFn;
        });

        await callModule.call(mockRod, req, res, next).catch((e)=>{
            console.log(e);
        });

        expect(mockRod.utils.services).toBeCalledWith('exampleSubService.foo');
        expect(fooFn).toBeCalled();
    });
    
});

