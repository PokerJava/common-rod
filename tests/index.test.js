  
let commonRodMock;
let app;
jest.mock("common-rod", () => commonRodMock = jest.fn(()=> app = {}));
let index = require('../index');


describe('index', () => {
    beforeEach(() => {
    })

    test('run server with common-rod', async () => {
        expect(commonRodMock).toBeCalled();
    });

    test('call common-rod with callback and option', async () => {
        let option = {
            mongo_create_connect:false,
            detaillog_add_output_response:true,
            summarylog_auto_end:true
        }; 
        expect(commonRodMock).toBeCalledWith(expect.any(Function),option);
    });
   
    
    test('call common-rod with callback and option', async () => {
        let option = {
            mongo_create_connect:false,
            detaillog_add_output_response:true,
            summarylog_auto_end:true
        }; 
        expect(commonRodMock).toBeCalledWith(expect.any(Function),option);
    });

    test('assign function to find a session', async () => {
        expect(app.session).toBeInstanceOf( Function );
    });
    
});

