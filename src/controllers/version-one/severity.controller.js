const express = require("express");
const commons = require("../../utils/commons");
const endpoints = require("../../utils/endpoints");



const Commons = new commons();
const Endpoints = new endpoints();

const createSeverityService = require("../../services/severity/create.severity.service");
    const readSeverityService = require("../../services/severity/read.severity.service");
    const updateSeverityService = require ("../../services/severity/update.severity.service");
    const deleteSeverityService = require("../../services/severity/delete.severity.service");


    const CreateSeverityService = new createSeverityService()
    const ReadSeverityService = new readSeverityService()
    const UpdateSeverityService = new updateSeverityService()
    const DeleteSeverityService = new deleteSeverityService()

    const severityController = express.Router()

     severityController.post(Endpoints.ENDPOINT_SEVERITY,async (request,response)=>{
        const apiID = "tms.api.rest.dataaccess.severity.create.v1"
        Commons.executeController(request,response,apiID,CreateSeverityService.createOneseverity)
         })

    severityController.post(Endpoints.ENDPOINT_SEVERITIES,async (request,response)=>{
        const apiID = "tms.api.rest.dataaccess.severity.read.v1"
        Commons.executeController(request,response,apiID,ReadSeverityService.readSeverity)
    });
    severityController.get(Endpoints.ENDPOINT_ONE_SEVERITY,async(request,response)=>{
        const apiID = "tms.api.rest.dataaccess.severity.readone.v1"
        Commons.executeController(request,response,apiID,ReadSeverityService.readOneseverity)
    });
    severityController.patch(Endpoints.ENDPOINT_SEVERITIES,async(request,response)=>{
        const apiID = "tms.api.rest.dataaccess.severity.update.v1"
        Commons.executeController(request,response,apiID,UpdateSeverityService.updateSeverity)
    });
    severityController.delete(Endpoints.ENDPOINT_ONE_SEVERITY,async(request,response)=>{
        const apiID = "tms.api.rest.dataaccess.severity.deleteone.v1"
        Commons.executeController(request,response,apiID,DeleteSeverityService.deleteOneSeverity)
    });
    module.exports = severityController