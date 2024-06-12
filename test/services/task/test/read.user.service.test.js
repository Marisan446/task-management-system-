/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 09 2023
* Description   : This file contains tests for all the fucntions in read User service class
**/

/**
 * Importing all required modules here
 */

const readUserServiceData = require("../data/read.user.service.data")
const readUserService = require("../../../../src/services/user/read.user.service")

/**
 * Initializing objects for all the imported classes 
 */
const ReadUserService = new readUserService();
const ReadUserServiceData = new readUserServiceData();


describe("TestSuiteID : [tms.api.dataaccess.service.user.ts.001] | FunctionPath : [src/services/user/read.contianer.service.js/readUsers()]", () => {


	test(ReadUserServiceData.READ_USER_TS001_TC001.description, async () => {

        const output = await ReadUserService.readUsers(
            ReadUserServiceData.READ_USER_TS001_TC001.input.databaseConnector,
            ReadUserServiceData.READ_USER_TS001_TC001.input.apiID,
            ReadUserServiceData.READ_USER_TS001_TC001.input.config,
            ReadUserServiceData.READ_USER_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadUserServiceData.READ_USER_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadUserServiceData.READ_USER_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadUserServiceData.READ_USER_TS001_TC001.output)[2])
	});



    test(ReadUserServiceData.READ_USER_TS001_TC002.description, async () => {

        const output = await ReadUserService.readUsers(
            ReadUserServiceData.READ_USER_TS001_TC002.input.databaseConnector,
            ReadUserServiceData.READ_USER_TS001_TC002.input.apiID,
            ReadUserServiceData.READ_USER_TS001_TC002.input.config,
            ReadUserServiceData.READ_USER_TS001_TC002.input.input
        )
        expect(output.data).toBe(ReadUserServiceData.READ_USER_TS001_TC002.output.data)
        expect(output.status).toBe(ReadUserServiceData.READ_USER_TS001_TC002.output.status)
        expect(output.message).toBe(ReadUserServiceData.READ_USER_TS001_TC002.output.message)        
	});



    test(ReadUserServiceData.READ_USER_TS001_TC003.description, async () => {

        const output = await ReadUserService.readUsers(
            ReadUserServiceData.READ_USER_TS001_TC003.input.databaseConnector,
            ReadUserServiceData.READ_USER_TS001_TC003.input.apiID,
            ReadUserServiceData.READ_USER_TS001_TC003.input.config,
            ReadUserServiceData.READ_USER_TS001_TC003.input.input
        )
        expect(output.status).toBe(ReadUserServiceData.READ_USER_TS001_TC003.output.status)
        expect(output.message).toBe(ReadUserServiceData.READ_USER_TS001_TC003.output.message)        
	});

});

describe("TestSuiteID : [tms.api.dataaccess.service.user.ts.002] | FunctionPath : [src/services/user/read.user.service.js/readOneUser()]", () => {


	test(ReadUserServiceData.READ_ONE_USER_TS002_TC001.description, async () => {

        const output = await ReadUserService.readOneUser(
            ReadUserServiceData.READ_ONE_USER_TS002_TC001.input.databaseConnector,
            ReadUserServiceData.READ_ONE_USER_TS002_TC001.input.apiID,
            ReadUserServiceData.READ_ONE_USER_TS002_TC001.input.config,
            ReadUserServiceData.READ_ONE_USER_TS002_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(ReadUserServiceData.READ_ONE_USER_TS002_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(ReadUserServiceData.READ_ONE_USER_TS002_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(ReadUserServiceData.READ_ONE_USER_TS002_TC001.output)[2])
	});



    test(ReadUserServiceData.READ_ONE_USER_TS002_TC002.description, async () => {

        const output = await ReadUserService.readOneUser(
            ReadUserServiceData.READ_ONE_USER_TS002_TC002.input.databaseConnector,
            ReadUserServiceData.READ_ONE_USER_TS002_TC002.input.apiID,
            ReadUserServiceData.READ_ONE_USER_TS002_TC002.input.config,
            ReadUserServiceData.READ_ONE_USER_TS002_TC002.input.input
        )
        expect(output.data).toBe(ReadUserServiceData.READ_ONE_USER_TS002_TC002.output.data)
        expect(output.status).toBe(ReadUserServiceData.READ_ONE_USER_TS002_TC002.output.status)
        expect(output.message).toBe(ReadUserServiceData.READ_ONE_USER_TS002_TC002.output.message)        
	});



    test(ReadUserServiceData.READ_ONE_USER_TS002_TC003.description, async () => {

        const output = await ReadUserService.readOneUser(
            ReadUserServiceData.READ_ONE_USER_TS002_TC003.input.databaseConnector,
            ReadUserServiceData.READ_ONE_USER_TS002_TC003.input.apiID,
            ReadUserServiceData.READ_ONE_USER_TS002_TC003.input.config,
            ReadUserServiceData.READ_ONE_USER_TS002_TC003.input.input
        )
        expect(output.status).toBe(ReadUserServiceData.READ_ONE_USER_TS002_TC003.output.status)
        expect(output.message).toBe(ReadUserServiceData.READ_ONE_USER_TS002_TC003.output.message)        
	});

});