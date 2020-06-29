const commonRod = require('common-rod');
const increaseStat = require('../../../src/modules/example1/increaseStat').increaseStat;



describe('increaseStat', () => {
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

    test('increase stat name = "example stat"', async () => {
        await increaseStat.call(mockRod, req, res, next).catch((e)=>{
            console.log(e);
        });
        expect(mockRod.stat).toBeCalledWith("example stat");
    });
    
});

