const express = require("express");
const app = express();
const User= require("./model/user.model")
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post("/api/users/register",async(req,res)=>{
    let {name,email,password} = req.body;
    let userExist= await User.findOne({email}); //mock  -->true
    if(userExist){
        return res.json({
            success:false,
            message:"user already exist"
        })
    }
    let newUser = await User.create({ //mock
        name:name,
        email:email,
        password:password
    })
    res.json({
        success:true,
        message:"user registered successfully",
        data:newUser
    })
})
module.exports= app
// app.listen(4000,()=>{
//     console.log("server started")
// })