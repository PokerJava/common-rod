const commonRod = require('common-rod');
const foo = require('../../../src/services/exampleSubService/foo').foo;

describe('foo', () => {
    let mockRod;
    
    beforeEach(() => {
        mockRod = commonRod.mock();
    })

    test('write log all level', async () => {
        foo.call(mockRod, null);
        expect(mockRod.debug).toBeCalled();
        expect(mockRod.info).toBeCalled();
        expect(mockRod.warn).toBeCalled();
        expect(mockRod.error).toBeCalled();
    });
});

