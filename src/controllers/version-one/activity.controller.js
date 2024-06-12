const express = require("express");
const commons = require("../../utils/commons");
const endpoints = require("../../utils/endpoints");



const Commons = new commons();
const Endpoints = new endpoints();


const createActivityService = require("../../services/activity/create.activity.service");
const readActivityService = require("../../services/activity/read.activity.service");
const updateActivityService = require("../../services/activity/update.activity.service");
const deleteActivityService = require("../../services/activity/delete.activity.service");


const CreateActivityService = new createActivityService();
const ReadACtivityService = new readActivityService();
const UpdateActivityService = new updateActivityService();
const DeleteActivityService = new deleteActivityService();

const ActivityController = express.Router()


ActivityController.post(Endpoints.ENDPOINT_ACTIVITY,async (request,response)=>{
    const apiID ="tms.api.rest.dataaccess.activity.create.v1"
    Commons.executeController(request,response,apiID,CreateActivityService.createOneactivity)
});
ActivityController.post(Endpoints.ENDPOINT_ACTIVITIES,async (request,response)=>{
    const apiID ="tms.api.rest.dataaccess.activity.read.v1"
    Commons.executeController(request,response,apiID,ReadACtivityService.readActivity)
});
ActivityController.get(Endpoints.ENDPOINT_ONE_ACTIVITY,async (request,response)=>{
    const apiID = "tms.api.rest.dataaccess.activity.readone.v1"
    Commons.executeController(request,response,apiID,ReadACtivityService.readOneactivity)
 });
 ActivityController.patch(Endpoints.ENDPOINT_ACTIVITIES,async(request,response)=>{
    const apiID ="tms.api.rest.dataaccess.activity.update.v1"
    Commons.executeController(request,response,apiID,UpdateActivityService.updateActivity)
 });
 ActivityController.delete(Endpoints.ENDPOINT_ONE_ACTIVITY,async(request,response)=>{
    const apiID ="tms.api.rest.dataaccess.activity.deleteone.v1"
    Commons.executeController(request,response,apiID,DeleteActivityService.deleteOneActivity)
 });

 module.exports = ActivityController