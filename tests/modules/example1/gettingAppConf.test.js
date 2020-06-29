  
const commonRod = require('common-rod');
const gettingAppConf = require('../../../src/modules/example1/gettingAppConf').gettingAppConf;

describe('gettingAppConf', () => {
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

    test('getting app conf key=example_config_1,example_config_2', async () => {
        let example_config_1 = "foo";
        let example_config_2 = {"foo":"foo"};
        mockRod.utils.app.conf.mockReturnValueOnce( example_config_1 ).mockReturnValueOnce(example_config_2);
        
        await gettingAppConf.call(mockRod, req, res, next).catch((e)=>{
            console.log(e);
        });
       
        expect(mockRod.utils.app.conf).toBeCalledWith("example_config_1");
        expect(mockRod.utils.app.conf).toBeCalledWith("example_config_2");
      
        expect(mockRod.debug).toBeCalledWith("example_config_1", example_config_1); 
        expect(mockRod.debug).toBeCalledWith("example_config_2", example_config_2);
         
    });

    test('getting app const key=const_config_1,const_config_2', async () => {
        let const1 = "foo";
        let const2 = {"foo":"foo"};
        mockRod.utils.app.const.mockReturnValueOnce( const1 ).mockReturnValueOnce(const2);

        await gettingAppConf.call(mockRod, req, res, next).catch((e)=>{
            console.log(e);
        }); 

        expect(mockRod.utils.app.const).toBeCalledWith("const_config_1");
        expect(mockRod.utils.app.const).toBeCalledWith("const_config_2");

        expect(mockRod.debug).toBeCalledWith("const_config_1", const1);
        expect(mockRod.debug).toBeCalledWith("const_config_2", const2);
    });

    
    
});

