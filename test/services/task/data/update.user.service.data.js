/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 08 2023
* Description : This file contains test data for all the fucntions in delete user service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class deleteUserServiceData {


    /**
     * TestSuiteID  : [tms.api.dataaccess.service.user.ts.001]
     * Description  : This test checks the function's output structure is upto the specification
     * TestCaseID   : [tms.api.dataaccess.service.user.tc.001]
     */
    UPDATE_USER_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "tms.api.rest.dataaccess.user.update.v1",
            config: {
                "ID": 7,
                "Name": "UPDATE users",
                "Endpoint": "/api/rest/tms/dataaccess/1.0.0/user/v1/users",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: "[MOCK] User has updated successfully"
        },
    }


    /**
     * TestSuiteID  : [tms.api.dataaccess.service.user.ts.001]
     * Description  : This test checks the availabilty flag is there
     * TestCaseID   : [tms.api.dataaccess.service.user.tc.002]
     */

    UPDATE_USER_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "tms.api.rest.dataaccess.user.update.v1",
            config: {
                "ID": 7,
                "Name": "UPDATE MULTIPLE USERS",
                "Endpoint": "/api/rest/tms/dataaccess/1.0.0/user/v1/users",
                "IsAvailable": false,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 400,
            message: "Avaliability flag has not been enabled"
        },
    }
    /**
     * TestSuiteID  : [tms.api.dataaccess.service.user.ts.001]
     * Description  : This test checks mock enabled flag is working
     * TestCaseID   : [tms.api.dataaccess.service.user.tc.002]
     */
    UPDATE_USER_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "tms.api.rest.dataaccess.user.update.v1",
            config: {
                "ID": 7,
                "Name": "UPDATE MULTIPLE USERS",
                "Endpoint": "/api/rest/tms/dataaccess/1.0.0/user/v1/users",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] User has been updated successfully"
        },
    }

}
