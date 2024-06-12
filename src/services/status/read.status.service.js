

const commons = require("../../utils/commons");
const messages = require("../../utils/messages");
const StatusMock = require("../../mocks/status.mock.json");


const Commons = new commons();
const Messages = new messages();

module.exports = class readStatusService {


	
	async readStatus(databaseConnector, apiID, config, input) {
		try {
			if (config.IsAvailable == false) { return Commons.generateServiceOutputForAvalibalityNotEnabled() }
			if (config.IsMockEnabled == true) { return StatusMock[apiID] }
			else {
				let output = await databaseConnector.Status.findMany(
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


	async readOneStatus(databaseConnector, apiID, config, input) {
		try {
			if (config.IsAvailable == false) { return Commons.generateServiceOutputForAvalibalityNotEnabled() }
			if (config.IsMockEnabled == true) { return StatusMock[apiID] }
			else {
				let output = await databaseConnector.Status.findUnique({
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
					return Commons.generateServiceOutput(output, 200, Messages.MESSAGE_USER_HAS_BEEN_FOUND);
				}
			}
		}
		catch (error) {
			throw Commons.generateServiceOutput(null, error.status || 500, JSON.stringify(error.message))
		}
	}

}