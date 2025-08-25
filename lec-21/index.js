const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./model/users")
app.use(express.json());
app.use(express.urlencoded({extended:true}))
console.log(User)
app.get("/health",(req,res)=>{
    res.json({
        status:"ok",
        message:"server running ok"
    })
})
//end-point for signup---adding new user into database
app.post("/api/users/signup",async(req,res)=>{
    try {
         let {name,email,password} = req.body;
    let userExist= await User.findOne({email:email})
    if(userExist){
        return res.json({
            success:false,
            message:"user already exist with this email please login"
        })
    }
    let newUser= new User({
        name:name,
        email:email,
        password:password
    })
    await newUser.save()
    res.json({
        success:true,
        message:"user registered successfully, please login to continue"
    })
    } catch (error) {
        console.log(error.message);
        res.json({
            error:{
                message:error.message
            }
        })
    }
   
})
app.post("/api/auth/login",async(req,res)=>{
    try {
        const {email,password} = req.body;
    let userExist= await User.findOne({email:email});
    if(!userExist){
        return res.json({
            success:false,
            message:"user does not exist please signup"
        })
    }
    if(userExist.password!=password){
        return res.json({
            success:false,
            message:"Invalid password, please try again"
        })
       
    }
    if(userExist.password==password){
        return res.json({
            success:true,
            message:"login successfully"
        })
    } 
    } catch (error) {
        console.log(error);
        res.json({
            error:{
                message:error.message
            }
        })
    }
   

})












mongoose.connect("mongodb://127.0.0.1:27017/blogapp")
.then(()=>{
    console.log("db connected")
})
.catch((err)=>{
    console.log(err.message)
})
app.listen(5545,()=>{
    console.log("server started")
})