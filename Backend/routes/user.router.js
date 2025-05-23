const express=require("express")
const userController=require('../controller/user.controller')
const routes=express.Router();

routes.post("/create",userController.createUser);
routes.post("/login",userController.login);
routes.post("/all-users",userController.showAll);

module.exports=routes