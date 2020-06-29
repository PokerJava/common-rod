const commonRod = require('common-rod');
const exampleSvc = require('../../src/services/exampleSvc');

describe('fn1', () => {
    let mockRod;
    
    beforeEach(() => {
        mockRod = commonRod.mock();
    })

    test('write log all level', async () => {
        const fn1 = exampleSvc.fn1;
        fn1.call(mockRod, null);

        expect(mockRod.debug).toBeCalled();
        expect(mockRod.info).toBeCalled();
        expect(mockRod.warn).toBeCalled();
        expect(mockRod.error).toBeCalled();
    });
});

describe('fn2', () => {
    let mockRod;
    
    beforeEach(() => {
        mockRod = commonRod.mock();
    })

    test('write debug log with param', async () => {
        const fn2 = exampleSvc.fn2;
        fn2.call(mockRod, "paramA");

        expect(mockRod.debug).toBeCalledWith("print log debug param=","paramA");
    });
});

