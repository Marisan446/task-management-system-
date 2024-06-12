/**
* CreatedBy   : Dinesh
* CreatedTime : Jan 09 2023
* Description : This file contains test data for all the fucntions in read User service class
**/


/**
 * Write a test suite for each function in the service class
 */
module.exports = class readUserServiceData {


    /**
     * TestSuiteID  : [tms.api.dataaccess.service.user.ts.001]
     * Description  : This test function output structure is upto the specification
     * TestCaseID   : [tms.api.dataaccess.service.user.tc.001]
     */
    READ_USER_TS001_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "tms.api.rest.dataaccess.user.read.v1",
            config: {
                "ID": 1,
                "Name": "READ USER",
                "Endpoint": "/api/rest/tms/dataaccess/1.0.0/user/v1/userstatuses",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " User has been read successfully"
        },
    }


    /**
     * TestSuiteID  : [tms.api.dataaccess.service.user.ts.001]
     * Description  : This test check availabilty flag is there
     * TestCaseID   : [tms.api.dataaccess.service.user.tc.002]
     */
    READ_USER_TS001_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "tms.api.rest.dataaccess.user.read.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
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
     * Description  : This test checks mock is enabled flag is working
     * TestCaseID   : [tms.api.dataaccess.service.user.tc.003]
     */
    READ_USER_TS001_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "tms.api.rest.dataaccess.user.read.v1",
            config: {
                "ID": 2,
                "Name": "READ USER",
                "Endpoint": "/api/rest/tms/dataaccess/1.0.0/user/v1/users",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] User has been read successfully"
        },
    }
    
    /**
     * TestSuiteID  : [tms.api.dataaccess.service.user.ts.002]
     * Description  : This test checks function's output structure is upto the specification
     * TestCaseID   : [tms.api.dataaccess.service.user.tc.001]
     */
    READ_ONE_USER_TS002_TC001 = {

        description: "Test function's output structure is upto the specification",
        input: {
            databaseConnector: null,
            apiID: "tms.api.rest.dataaccess.user.readone.v1",
            config: {
                "ID": 1,
                "Name": "READ USER",
                "Endpoint": "/api/rest/tms/dataaccess/1.0.0/user/v1/user/:userstatusid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: null,
        },
        output: {
            data: null,
            status: 200,
            message: " User has been readone successfully"
        },
    }


    /**
     * TestSuiteID  : [tms.api.dataaccess.service.user.ts.002]
     * Description  : This test checks availabilty flag is there
     * TestCaseID   : [tms.api.dataaccess.service.user.tc.002]
     */
    READ_ONE_USER_TS002_TC002 = {

        description: "Check availabilty flag is there",
        input: {
            databaseConnector: null,
            apiID: "tms.api.rest.dataaccess.user.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ WEIGHT TYPE",
                "Endpoint": "/api/rest/tms/dataaccess/1.0.0/user/v1/user/:userstatusid",
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
     * TestSuiteID  : [tms.api.dataaccess.service.user.ts.002]
     * Description  : This test checks mock enabled flag is working
     * TestCaseID   : [tms.api.dataaccess.service.user.tc.003]
     */
    READ_ONE_USER_TS002_TC003 = {

        description: "Check mock enabled flag is working",
        input: {
            databaseConnector: null,
            apiID: "tms.api.rest.dataaccess.user.readone.v1",
            config: {
                "ID": 2,
                "Name": "READ USER",
                "Endpoint": "/api/rest/tms/dataaccess/1.0.0/user/v1/user/:userstatusid",
                "IsAvailable": true,
                "IsMockEnabled": true
            },
            input: {},
        },
        output: {
            data: {},
            status: 200,
            message: "[MOCK] User has been readone successfully"
        },
    }

}