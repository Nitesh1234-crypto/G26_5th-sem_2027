const express= require("express");
const router = express.Router();
// const user= require("../model/user")
const {postAddUser,getReadUsers,getOneUser}=require("../controller/userController")
router.post("/",postAddUser)
router.get("/",getReadUsers)
router.get("/:id",getOneUser)

module.exports=router;