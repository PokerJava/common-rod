const commonRod = require('common-rod');
const postExample2 = require('../../../src/modules/example2/postExample2').postExample2;



describe('postExample2', () => {
    let mockRod;
    let res;
    let next;
    let req;
    
    beforeEach(() => {
        mockRod = commonRod.mock();
        req = {};
        res = commonRod.mockExpressRes();
        next = jest.fn();
        mockRod.utils.services.modules.mockImplementation(()=> jest.fn());
    })

    test('init commonlog with express.req', async () => {
        await postExample2.call(mockRod, req, res, next).catch((e)=>{
            console.log(e);
        });
        expect(mockRod.commonLog).toBeCalledWith(req);
    });

    test('call fn validateParam with express.req', async () => {
        let validateParamFn = jest.fn();
        mockRod.utils.services.modules.mockImplementation(()=> validateParamFn);
        await postExample2.call(mockRod, req, res, next).catch((e)=>{
            console.log(e);
        });
        expect(mockRod.utils.services).toBeCalledWith("exampleValidator");
        expect(mockRod.utils.services.modules).toBeCalledWith("validateParam");
        expect(validateParamFn).toBeCalledWith(req);  
    });

    test('validateParam return false, ins stat name="stat name error"', async () => {
        let mockvalidateParamRes = false;
        mockRod.utils.services.modules.mockImplementation( ()=> jest.fn().mockReturnValue(mockvalidateParamRes) );
        await postExample2.call(mockRod, req, res, next).catch((e)=>{
            console.log(e);
        });

        expect(mockRod.stat).toBeCalledWith("stat name error");
    });

    test('validateParam return false, summary add errorBlock"', async () => {
        let mockvalidateParamRes = false;
        mockRod.cmd = "postExample2"
        mockRod.utils.services.modules.mockImplementation( ()=> jest.fn().mockReturnValue(mockvalidateParamRes) );
        await postExample2.call(mockRod, req, res, next).catch((e)=>{
            console.log(e);
        });

        expect(mockRod.summary.addErrorBlock).toBeCalledWith("client", mockRod.cmd, null, "missing param foo");
    });

    test('validateParam return false, send response with 40000"', async () => {
        let mockvalidateParamRes = false;
        mockRod.utils.services.modules.mockImplementation( ()=> jest.fn().mockReturnValue(mockvalidateParamRes) );
        await postExample2.call(mockRod, req, res, next).catch((e)=>{
            console.log(e);
        });

        expect(res.json).toBeCalledWith({resultCode:"40000",developerMessage:"bad bad bad"});
    });


    test('validateParam return true, ins stat name="stat name success"', async () => {
        let mockvalidateParamRes = true;
        mockRod.utils.services.modules.mockImplementation( ()=> jest.fn().mockReturnValue(mockvalidateParamRes) );
        await postExample2.call(mockRod, req, res, next).catch((e)=>{
            console.log(e);
        });

        expect(mockRod.stat).toBeCalledWith("stat name success");
    });

    test('validateParam return true, summary add successBlock"', async () => {
        let mockvalidateParamRes = true;
        mockRod.cmd = "postExample2"
        mockRod.utils.services.modules.mockImplementation( ()=> jest.fn().mockReturnValue(mockvalidateParamRes) );
        await postExample2.call(mockRod, req, res, next).catch((e)=>{
            console.log(e);
        });

        expect(mockRod.summary.addSuccessBlock).toBeCalledWith("client", mockRod.cmd, "20000", "success");
    });

    test('validateParam return true, send response with 20000"', async () => {
        let mockvalidateParamRes = true;
        mockRod.utils.services.modules.mockImplementation( ()=> jest.fn().mockReturnValue(mockvalidateParamRes) );
        await postExample2.call(mockRod, req, res, next).catch((e)=>{
            console.log(e);
        });

        expect(res.json).toBeCalledWith({resultCode:"20000",developerMessage:"success"});
    });
    
});

