const commons = require("../../utils/commons");
const messages = require("../../utils/messages");
const PriorityMock = require("../../mocks/priority.mock.json");



const Commons = new commons();
const Messages = new messages();


module.exports = class updatePriorityService {

	
	
	async updatePriority(databaseConnector, apiID, config, input) {
		try {
			if (config.IsAvailable == false) { return Commons.generateServiceOutputForAvalibalityNotEnabled() }
			if (config.IsMockEnabled == true) { return PriorityMock[apiID] }
			else {
				let output = await databaseConnector.Priority.updateMany({
					where: input.filter,
					data: input.fields
				}).catch((error) => {
					Commons.generateServiceOutput(null, 500, JSON.stringify(error.message))
				});
				if(output.count==0){
					return Commons.generateServiceOutput(output, 404, Messages.MESSAGE_USER_NOT_FOUND);
				}
				else{
				return Commons.generateServiceOutput(output, 200, Messages.MESSAGE_USER_UPDATED_SUCCESSFULLY);
				}
			}
		} catch (error) {
			throw Commons.generateServiceOutput(null, error.status || 500, JSON.stringify(error.message))
		}
	}
}