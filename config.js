
/**
* CreatedBy    : Dinesh
* CreatedTime  : Jan 05 2022
* Description  : This file contains all the configurations needed for the service
**/

module.exports = class config {

	// Basic Configuration
	TMS_REST_DATA_ACCESS_NAME = "TMS-Rest-Data-Access!";
	TMS_REST_DATA_ACCESS_HOST = "localhost";
	TMS_REST_DATA_ACCESS_PORT = "3000";

	TMS_REST_DATA_ACCESS_USERNAME = "QP0192923232LD";
	TMS_REST_DATA_ACCESS_PASSWORD = "927NBGJJ0283HKA74782";

	// Accounts-Rest-Data-Access datatabase Connection Configurations
	TMS_REST_DATA_ACCESS_DEFAULT_DATABASE_CONNECTION_ENABLED = true;

	TMS_REST_DATA_ACCESS_DATABASE_CONNECTIONS = {
		isDefault: true,
		databaseURL: "postgresql://postgres:12345@localhost:5432/Task-Management-System-04JUNE2024",
		databaseName: "Task-Management-System-28MAY2024"
	};
};