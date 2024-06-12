
const express = require("express");
    const commons = require("../../utils/commons");
    const endpoints = require("../../utils/endpoints")

    const Commons = new commons();
    const Endpoints = new endpoints();

    const createTaskService = require("../../services/task/create.task.service");
    const readTaskService = require ("../../services/task/read.task.service");
    const updateTaskService = require("../../services/task/update.task.service");
    const deleteTaskService = require("../../services/task/delete.task.service")




    const CreateTaskService =new createTaskService();
    const ReadTaskService = new readTaskService();
    const UpdateTaskService = new updateTaskService();
    const DeleteTaskService = new deleteTaskService()

    const TaskController = express.Router()

    TaskController.post(Endpoints.ENDPOINT_TASK,async(request,response)=>{
        const apiID = "tms.api.rest.dataaccess.task.create.v1"
        Commons.executeController(request,response,apiID,CreateTaskService.createOneTask)
    });
    TaskController.post (Endpoints.ENDPOINT_TASKS,async(request,response)=>{
        const apiID = "tms.api.rest.dataaccess.task.read.v1"
        Commons.executeController(request,response,apiID,ReadTaskService.readTask)
    });
    TaskController.get(Endpoints.ENDPOINT_ONE_TASKS,async(request,response)=>{
        const apiID = "tms.api.rest.dataaccess.task.readone.v1"
        Commons.executeController(request,response,apiID,ReadTaskService.readOneTask)
    });
    TaskController.patch(Endpoints.ENDPOINT_TASKS,async(request,response)=>{
        const apiID = "tms.api.rest.dataaccess.task.update.v1"
        Commons.executeController(request,response,apiID,UpdateTaskService.updateTask)
    });
    TaskController.delete(Endpoints.ENDPOINT_ONE_TASKS,async(request,response)=>{
        const apiID ="tms.api.rest.dataaccess.task.delete.v1"
        Commons.executeController(request,response,apiID,DeleteTaskService.deleteOneTask)
    })
    module.exports = TaskController;