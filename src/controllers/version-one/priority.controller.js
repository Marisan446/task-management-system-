const express = require("express");
const commons = require("../../utils/commons");
const endpoints = require("../../utils/endpoints");



const Commons = new commons();
const Endpoints = new endpoints();

const createPriorityService = require("../../services/priority/create.priority.service");
const readPriorityService = require("../../services/priority/read.priority.service");
const updatePriorityService = require("../../services/priority/update.priority.service");
const deletePriorityService = require("../../services/priority/delete.priority.service");

const CreatePriorityService = new createPriorityService()
const ReadPriorityService = new readPriorityService()
const UpdatePriorityService = new updatePriorityService()
const DeletePriorityService = new deletePriorityService()

const priorityController = express.Router()

priorityController.post(Endpoints.ENDPOINT_PRIORITY,async (request,response)=>{
    const apiID = "tms.api.rest.dataaccess.priority.create.v1"
    Commons.executeController(request,response,apiID,CreatePriorityService.createOnepriority)
});

priorityController.post (Endpoints.ENDPOINT_PRIORITIES,async (request,response)=>{
    const apiID = "tms.api.rest.dataaccess.priority.read.v1"
    Commons.executeController(request,response,apiID,ReadPriorityService.readPriority)
});
priorityController.get(Endpoints.ENDPOINT_ONE_PRIORITY,async(request,response)=>{
    const apiID = "tms.api.rest.dataaccess.priority.readone.v1"
    Commons.executeController(request,response,apiID,ReadPriorityService.readOnepriority)
});
priorityController.patch(Endpoints.ENDPOINT_PRIORITIES,async(request,response)=>{
    const apiID = "tms.api.rest.dataaccess.priority.update.v1"
    Commons.executeController(request,response,apiID,UpdatePriorityService.updatePriority)
});
priorityController.delete(Endpoints.ENDPOINT_ONE_PRIORITY,async (request,response)=>{
    const apiID = "tms.api.rest.dataaccess.priority.deleteone.v1"
    Commons.executeController(request,response,apiID,DeletePriorityService.deleteOnePriority)
});
module.exports = priorityController