const commonRod = require('common-rod');
const initCommonLog = require('../../../src/modules/example1/initCommonLog').initCommonLog;



describe('initCommonLog', () => {
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

    test('init commonlog with express.req, cmd and identity', async () => {
        mockRod.cmd = "cmd";
        req.headers = {
            "x-session-id":"s1",
            "x-rtid":"r1",
            "x-tid":"t1"
        }

        await initCommonLog.call(mockRod, req, res, next).catch((e)=>{
            console.log(e);
        });

        let expectIdentity = req.headers["x-session-id"] + req.headers["x-rtid"] + req.headers["x-tid"];
        expect(mockRod.commonLog).toBeCalledWith(req, mockRod.cmd, expectIdentity);
    });

    test('add sequence of summaryLog with success block', async () => {
        req.headers = {};
        mockRod.cmd = "cmd";
        await initCommonLog.call(mockRod, req, res, next).catch((e)=>{
            console.log(e);
        });

        expect(mockRod.summary.addSuccessBlock).toBeCalledWith("client", mockRod.cmd, null, "success");
    });

});

