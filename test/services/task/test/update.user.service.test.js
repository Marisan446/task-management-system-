

/** 
* CreatedBy   	: Dinesh
* CreatedTime 	: Jan 10 2023
* Description   : This file contains tests for all the fucntions in update user service class
**/

/**
 * Importing all required modules here
 */

const updateUserServiceData = require("../data/update.user.service.data")
const updateUserService = require("../../../../src/services/user/update.user.service")

/**
 * Initializing objects for all the imported classes 
 */
const UpdateUserService = new updateUserService();
const UpdateUserServiceData = new updateUserServiceData();


describe("TestSuiteID : [tms.api.dataaccess.service.user.ts.001] | FunctionPath : [src/services/user/update.user.service.js/updateUser()]", () => {

	test(UpdateUserServiceData.UPDATE_USER_TS001_TC001.description, async () => {

        const output = await UpdateUserService.updateUser(
            UpdateUserServiceData.UPDATE_USER_TS001_TC001.input.databaseConnector,
            UpdateUserServiceData.UPDATE_USER_TS001_TC001.input.apiID,
            UpdateUserServiceData.UPDATE_USER_TS001_TC001.input.config,
            UpdateUserServiceData.UPDATE_USER_TS001_TC001.input.input
        )
        expect(output).toHaveProperty(Object.keys(UpdateUserServiceData.UPDATE_USER_TS001_TC001.output)[0])
        expect(output).toHaveProperty(Object.keys(UpdateUserServiceData.UPDATE_USER_TS001_TC001.output)[1])
        expect(output).toHaveProperty(Object.keys(UpdateUserServiceData.UPDATE_USER_TS001_TC001.output)[2])
	});

    test(UpdateUserServiceData.UPDATE_USER_TS001_TC002.description, async () => {

        const output = await UpdateUserService.updateUser(
            UpdateUserServiceData.UPDATE_USER_TS001_TC002.input.databaseConnector,
            UpdateUserServiceData.UPDATE_USER_TS001_TC002.input.apiID,
            UpdateUserServiceData.UPDATE_USER_TS001_TC002.input.config,
            UpdateUserServiceData.UPDATE_USER_TS001_TC002.input.input
        )
        expect(output.data).toBe(UpdateUserServiceData.UPDATE_USER_TS001_TC002.output.data)
        expect(output.status).toBe(UpdateUserServiceData.UPDATE_USER_TS001_TC002.output.status)
        expect(output.message).toBe(UpdateUserServiceData.UPDATE_USER_TS001_TC002.output.message)        
	});

    test(UpdateUserServiceData.UPDATE_USER_TS001_TC003.description, async () => {

        const output = await UpdateUserService.updateUser(
            UpdateUserServiceData.UPDATE_USER_TS001_TC003.input.databaseConnector,
            UpdateUserServiceData.UPDATE_USER_TS001_TC003.input.apiID,
            UpdateUserServiceData.UPDATE_USER_TS001_TC003.input.config,
            UpdateUserServiceData.UPDATE_USER_TS001_TC003.input.input
        )
        expect(output.status).toBe(UpdateUserServiceData.UPDATE_USER_TS001_TC003.output.status)
        expect(output.message).toBe(UpdateUserServiceData.UPDATE_USER_TS001_TC003.output.message)        
	});

});
