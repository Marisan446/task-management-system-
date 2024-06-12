

const commons = require("../../utils/commons");
const messages = require("../../utils/messages");
const PriorityMock = require("../../mocks/priority.mock.json");


const Commons = new commons();
const Messages = new messages();

module.exports = class readPriorityService {


	
	async readPriority(databaseConnector, apiID, config, input) {
		try {
			if (config.IsAvailable == false) { return Commons.generateServiceOutputForAvalibalityNotEnabled() }
			if (config.IsMockEnabled == true) { return PriorityMock[apiID] }
			else {
				let output = await databaseConnector.Priority.findMany(
					Commons.generatePrismaFindManyInput(input)
				).catch((error) => {
					throw Commons.generateServiceOutput(null, 500, JSON.stringify(error.message))
				});
				if (output.length == 0) {
					return Commons.generateServiceOutput(null, 404, Messages.MESSAGE_USER_NOT_FOUND);
				} else {
					return Commons.generateServiceOutput(output, 200, Messages.MESSAGE_USER_READ_SUCCESSFULLY);
				}
			}
		}
		catch (error) {
			throw Commons.generateServiceOutput(null, error.status || 500, JSON.stringify(error.message))
		}
	}


	async readOnepriority(databaseConnector, apiID, config, input) {
		try {
			if (config.IsAvailable == false) { return Commons.generateServiceOutputForAvalibalityNotEnabled() }
			if (config.IsMockEnabled == true) { return PriorityMock[apiID] }
			else {
				let output = await databaseConnector.Priority.findUnique({
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
					return Commons.generateServiceOutput(output, 200, Messages.MESSAGE_USER_HAS_BEEN_FOUND);
				}
			}
		}
		catch (error) {
			throw Commons.generateServiceOutput(null, error.status || 500, JSON.stringify(error.message))
		}
	}

}