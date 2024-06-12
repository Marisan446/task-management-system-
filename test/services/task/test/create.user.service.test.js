/** 
* CreatedBy   	: Nishanth
* CreatedTime 	: Nov 02 2023
* Description   : This file contains tests for all the fucntions in create user service class
**/

/**
 * Importing all required modules here
 */

const createUserServiceData = require("../data/create.user.service.data")
const createUserService = require("../../../../src/services/user/create.user.service")

/**
 * Initializing objects for all the imported classes 
 */
const CreateUserService = new createUserService();
const CreateUserServiceData = new createUserServiceData();


describe("TestSuiteID : [tms.api.dataaccess.service.user.ts.001]", () => {


    test(CreateUserServiceData.CREATE_ONE_USER_TS001_TC001.description, async () => {

        const output = await CreateUserService.createOneUser(
            CreateUserServiceData.CREATE_ONE_USER_TS001_TC001.input.databaseConnector,
            CreateUserServiceData.CREATE_ONE_USER_TS001_TC001.input.apiID,
            CreateUserServiceData.CREATE_ONE_USER_TS001_TC001.input.config,
            CreateUserServiceData.CREATE_ONE_USER_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(CreateUserServiceData.CREATE_ONE_USER_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(CreateUserServiceData.CREATE_ONE_USER_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(CreateUserServiceData.CREATE_ONE_USER_TS001_TC001.output)[2])
    });

    test(CreateUserServiceData.CREATE_ONE_USER_TS001_TC002.description, async () => {

        const output = await CreateUserService.createOneUser(
            CreateUserServiceData.CREATE_ONE_USER_TS001_TC002.input.databaseConnector,
            CreateUserServiceData.CREATE_ONE_USER_TS001_TC002.input.apiID,
            CreateUserServiceData.CREATE_ONE_USER_TS001_TC002.input.config,
            CreateUserServiceData.CREATE_ONE_USER_TS001_TC002.input.input
        )
        expect(output.status).toBe(CreateUserServiceData.CREATE_ONE_USER_TS001_TC002.output.status)
        expect(output.message).toBe(CreateUserServiceData.CREATE_ONE_USER_TS001_TC002.output.message)
    });

});