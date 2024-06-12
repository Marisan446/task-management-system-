const commons = require("../../utils/commons");
const messages = require("../../utils/messages");
const StatusMock = require("../../mocks/status.mock.json");

/**
 * Initializing objects for all the imported classes
 */
const Commons = new commons();
const Messages = new messages();

module.exports = class deleteStatusService {
    async deleteOneStatus (databaseConnector,apiID,config,input){
        try {
			if (config.IsAvailable == false) { return Commons.generateServiceOutputForAvalibalityNotEnabled() }
			if (config.IsMockEnabled == true) { return StatusMock[apiID] }
        else {
            let output = await databaseConnector.Status.delete({
                where: {
                    StatusID: parseInt(input.statusid)
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