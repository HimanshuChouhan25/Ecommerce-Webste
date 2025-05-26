const express = require("express")
const userController=require('../controller/user.controller');
const { authenticate } = require("../middlewares/auth.middleware");
const routes=express.Router();


routes.post("/create",userController.createUser);
routes.post("/login",userController.login);
routes.get("/all-users",authenticate,userController.showAll);

module.exports=routes