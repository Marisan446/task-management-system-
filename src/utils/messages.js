module.exports = class messages {

	/**
	 * Common messages
	 */
	MESSAGE_SERVICE_RUNNING_SUCESSFULLY = "tms-Rest-Data-Access is now running on";
	MESSAGE_AVAILABILITY_NOT_ENABLED = "Avaliability flag has not been enabled";
	MESSAGE_MISSING_REQUEST_HEADER = "Missing 'TenantKey' or 'MerchantKey' in the request headers";
	MESSAGE_INVALID_REQUEST_HEADERS = "'TenantKey' or 'MerchantKey' in the request headers is not valid";
	MESSAGE_BASIC_AUTH_FAILED = "Basic authentication failed, incorrect username or password";
	MESSAGE_UNABLE_TO_CONNECT_TO_DATABASE = "Unable to establish connection with the database";
	MESSAGE_CONNECTED_TO_DEFAULT_DATABASE = "Connection has been established with the default database";
	MESSAGE_INVALID_FILTER_OBJECT = "Request cannot be processed due to invalid filter object";
	MESSAGE_DUPLICATE_RECORD = "Record with given filter already exist";

	/* Messages For APIs (INJECTED USING CODE GENERATOR) */
	
	MESSAGE_USER_CREATED_SUCCESSFULLY = "User has been created successfully";
	MESSAGE_USER_READ_SUCCESSFULLY = "User has been read successfully";
	MESSAGE_USER_HAS_BEEN_FOUND = "User has been readone successfully";
	MESSAGE_USER_UPDATED_SUCCESSFULLY = "User has been updated successfully";
	MESSAGE_USER_DELETED_SUCCESSFULLY = "User has been deleted successfully";
	MESSAGE_USER_NOT_FOUND = "User has not been found for the given filter"

}