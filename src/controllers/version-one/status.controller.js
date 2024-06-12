

const express = require("express");
    const commons = require("../../utils/commons");
    const endpoints = require("../../utils/endpoints")

    const Commons = new commons();
    const Endpoints = new endpoints();


    const createStatusService = require("../../services/status/create.status.service");
const { request, response } = require("../../../server");
const readStatusService = require("../../services/status/read.status.service");
const updateStatusService = require("../../services/status/update.status.service");
const deleteStatusService = require("../../services/status/delete.status.service")



    const CreateStatusService = new createStatusService();
    const ReadStatusService = new readStatusService();
    const UpdateStatusService = new updateStatusService();
    const DeleteStatusService = new deleteStatusService();



    const StatusController = express.Router()

    StatusController.post(Endpoints.ENDPOINT_STATUS,async (request,response) => {
        const apiID = "tms.api.rest.dataaccess.status.create.v1"
        Commons.executeController(request,response,apiID,CreateStatusService.createOneStatus)
    });

    StatusController.post(Endpoints.ENDPOINT_STATUSES,async (request,response) =>{
        const apiID = "tms.api.rest.dataaccess.status.read.v1"
        Commons.executeController(request,response,apiID,ReadStatusService.readStatus)
    });
    StatusController.get(Endpoints.ENDPOINT_ONE_STATUS,async(request,response) => {
        const apiID = "tms.api.rest.dataaccess.status.readone.v1"
        Commons.executeController(request,response,apiID,ReadStatusService.readOneStatus)
    });

    StatusController.patch(Endpoints.ENDPOINT_STATUSES,async (request,response) =>{
        const apiID = "tms.api.rest.dataaccess.status.update.v1"
        Commons.executeController(request,response,apiID,UpdateStatusService.updateStatus)
    });

    StatusController.delete(Endpoints.ENDPOINT_ONE_STATUS,async (request,response)=>{
        const apiID = "tms.api.rest.dataaccess.status.deleteone.v1"
        Commons.executeController(request,response,apiID,DeleteStatusService.deleteOneStatus)

    });


    module.exports = StatusController;
