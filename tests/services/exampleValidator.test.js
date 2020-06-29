const commonRod = require('common-rod');
const exampleValidator = require('../../src/services/exampleValidator');

describe('validateParam', () => {
    let mockRod;
    
    beforeEach(() => {
        mockRod = commonRod.mock();
    })

    test('param is null', async () => {
        const validateParam = exampleValidator.validateParam;
        let result = await validateParam.call(mockRod, null);
        expect(result).toBe(false);
        expect(mockRod.debug).toBeCalled(); //app write debug
        
    });

    test('param with empty object', async () => {
        const validateParam = exampleValidator.validateParam;
        let result = await validateParam.call(mockRod, {});
        expect(result).toBe(false);
    });

    test('call with param body', async () => {
        const validateParam = exampleValidator.validateParam;
        let result = await validateParam.call(mockRod, {body:{}});
        expect(result).toBe(false);
    });

    test('call with param body.foo = null', async () => {
        const validateParam = exampleValidator.validateParam;
        let result = await validateParam.call(mockRod, {body:{foo:null}});
        expect(result).toBe(false);
    });

    test('call with param body.foo = "bar"', async () => {
        const validateParam = exampleValidator.validateParam;
        let result = await validateParam.call(mockRod, {body:{foo:"bar"}});
        expect(result).toBe(true);
    });
    
    
    test('call with param body.foo = "barbar"', async () => {
        const validateParam = exampleValidator.validateParam;
        let result = await validateParam.call(mockRod, {body:{foo:"barbar"}});
        expect(result).toBe(false);
    });
});