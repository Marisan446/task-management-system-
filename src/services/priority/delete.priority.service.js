const commons = require("../../utils/commons");
const messages = require("../../utils/messages");
const PriorityMock = require("../../mocks/priority.mock.json");

/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Messages = new messages();

module.exports = class deletePriorityService {
    async deleteOnePriority (databaseConnector,apiID,config,input){
        try {
			if (config.IsAvailable == false) { return Commons.generateServiceOutputForAvalibalityNotEnabled() }
			if (config.IsMockEnabled == true) { return PriorityMock[apiID] }
        else {
            let output = await databaseConnector.Priority.delete({
                where: {
                    PriorityID: parseInt(input.priorityid)
                },
            }).catch((error) => {
                throw Commons.generateServiceOutput(null, 500, JSON.stringify(error.message))
            });
            if (output == null) {
                return Commons.generateServiceOutput(output, 404, Messages.MESSAGE_USER_NOT_FOUND);
            }
            else {
                return Commons.generateServiceOutput(output, 200, Messages.MESSAGE_USER_DELETED_SUCCESSFULLY);
            }
        }
    }
    catch (error) {
        throw Commons.generateServiceOutput(null, error.status || 500, JSON.stringify(error.message))
    }
}
}