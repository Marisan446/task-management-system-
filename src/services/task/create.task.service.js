const { Prisma } = require("@prisma/client");
const commons = require("../../utils/commons");
const messages = require("../../utils/messages");

const taskMock = require("../../mocks/task.mock.json");

const Commons = new commons();
const Messages = new messages();

module.exports = class createTaskService {

	async createOneTask(databaseConnector, apiID, config, input) {
		try {
			if (config.IsAvailable == false) { return Commons.generateServiceOutputForAvalibalityNotEnabled() }
			if (config.IsMockEnabled == true) { return taskMock[apiID] }
			else {
				let duplicateRecord = await databaseConnector.Task.findMany({
					where: input.filter || "null",
					select: { TaskID: true }
				}).catch((error) => {
					if (error instanceof Prisma.PrismaClientValidationError) {
						throw Commons.generateServiceOutput(null, 422, JSON.stringify(error.message))
					} else if (error instanceof Prisma.PrismaClientKnownRequestError) {
						throw Commons.generateServiceOutput(null, 422, JSON.stringify(error.message))
					} else {
						throw Commons.generateServiceOutput(null, 500, JSON.stringify(error.message))
					}
				});

				var filters = input.filter

				if (duplicateRecord.length === 0 || Object.keys(filters).length === 0) {

					let output = await databaseConnector.Task.create({
						data: input.data,
					}).catch((error) => {
						if (error instanceof Prisma.PrismaClientValidationError) {
							throw Commons.generateServiceOutput(null, 422, JSON.stringify(error.message))
						} else if (error instanceof Prisma.PrismaClientKnownRequestError) {
							throw Commons.generateServiceOutput(null, 422, JSON.stringify(error.message))
						} else {
							throw Commons.generateServiceOutput(null, 500, JSON.stringify(error.message))
						}
					});
					return Commons.generateServiceOutput(output, 200, Messages.MESSAGE_USER_CREATED_SUCCESSFULLY);
				}
				else {
					throw Commons.generateServiceOutput(null, 409, Messages.MESSAGE_DUPLICATE_RECORD)
				}
			}
		} catch (error) {
			throw Commons.generateServiceOutput(null, error.status || 500, error.message);
		}
	}
};