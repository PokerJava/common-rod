const commonRod = require('common-rod');
const callUtilHttp = require('../../../src/modules/example1/callUtilHttp').callUtilHttp;

describe('callUtilHttp', () => {
    let mockRod;
    let res;
    let next;
    let req;
    beforeEach(() => {
        mockRod = commonRod.mock();
        req = {"query":{}};
        res = commonRod.mockExpressRes();
        next = jest.fn();

        mockRod.utils.http.request.mockReturnValue({data:{}});
    })

    test('call http to node_be', async () => {
        await callUtilHttp.call(mockRod, req, res, next).catch((e)=>{
            console.log(e);
        });
        expect(mockRod.utils.http.request).toBeCalledWith(expect.objectContaining({ _service: "node_be",  _command:"example"}));
    });

    test('call http to node_be with header=x-header-a', async () => {
        await callUtilHttp.call(mockRod, req, res, next).catch((e)=>{
            console.log(e);
        });
        expect(mockRod.utils.http.request).toBeCalledWith(expect.objectContaining({headers: {"x-header-a":"header value a"} }));
    });

    test('call http to node_be with POST method', async () => {
        await callUtilHttp.call(mockRod, req, res, next).catch((e)=>{
            console.log(e);
        });
        expect(mockRod.utils.http.request).toBeCalledWith(expect.objectContaining({ method: "post" }));
    });

    test('call http to node_be with json {foo:bar}', async () => {
        req = {"query":{"foo":"bar"}};
        await callUtilHttp.call(mockRod, req, res, next).catch((e)=>{
            console.log(e);
        });
        expect(mockRod.utils.http.request).toBeCalledWith(expect.objectContaining({data: {"foo":"bar"} }));
    });

    test('receive resultCode=20000 from node_be, send response 20000', async () => {
        mockRod.utils.http.request.mockReturnValue({data:{resultCode:"20000",developerMessage:"success"}});
        await callUtilHttp.call(mockRod, req, res, next).catch((e)=>{
            console.log(e);
        });
        expect(res.json).toBeCalledWith({resultCode:"20000",developerMessage:"success"});
    });

    test('receive error from node_be, send response 50000', async () => {
        mockRod.utils.http.request.mockReturnValue({resultCode:"40000",developerMessage:"bad"});
        await callUtilHttp.call(mockRod, req, res, next).catch((e)=>{
            console.log(e);
        });
        expect(res.json).toBeCalledWith({resultCode:"50000",developerMessage:"system_error"});
    });
    
});

