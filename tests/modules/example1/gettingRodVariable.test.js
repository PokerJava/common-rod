const commonRod = require('common-rod');
const gettingRodVariable = require('../../../src/modules/example1/gettingRodVariable').gettingRodVariable;



describe('gettingRodVariable', () => {
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

    test('response must be 20000 success with json format', async () => {
        await gettingRodVariable.call(mockRod, req, res, next).catch((e)=>{
            console.log(e);
        });
        expect(res.json).toBeCalled();
        expect(res.json).toBeCalledWith({resultCode:"20000",developerMessage:"success"});
    });

    test('write log all level', async () => {
        await gettingRodVariable.call(mockRod, req, res, next).catch((e)=>{
            console.log(e);
        });
        expect(mockRod.debug).toBeCalled();
        expect(mockRod.info).toBeCalled();
        expect(mockRod.warn).toBeCalled();
        expect(mockRod.error).toBeCalled();
    });

    test('write log debug to show cmd, appName, sessionID', async () => {
        let cmd = "foo";
        let appName = "appname";
        let sessionID = "sessionID";
        mockRod.cmd= cmd;
        mockRod.appName= appName
        mockRod.sessionID= sessionID
        await gettingRodVariable.call(mockRod, req, res, next).catch((e)=>{
            console.log(e);
        });
        expect(mockRod.debug).toBeCalledWith("cmd=", cmd);
        expect(mockRod.debug).toBeCalledWith("appName=", appName);
        expect(mockRod.debug).toBeCalledWith("sessionID=", sessionID);
    });

});

