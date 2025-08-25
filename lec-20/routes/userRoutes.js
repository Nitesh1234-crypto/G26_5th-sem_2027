const express= require("express");
const router= express.Router();
const {m5} = require("../midlleware/routerlevel")
router.use(m5)
router.post("/",(req,res)=>{
    res.json({
        success:true,
        message:"user added successfully"
    })
})
router.get("/",(req,res)=>{
    res.json({
        success:true,
        message:"all users data fetched succesfully"
    })
})
router.get("/:id",(req,res)=>{
    res.json({
        success:true,
        message:"single user data fetched succesfully"
    })
})



module.exports=router