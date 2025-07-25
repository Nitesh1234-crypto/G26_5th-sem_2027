const express = require("express");
const app = express();
app.use(express.static(__dirname+"/public"))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
// app.get("/",(req,res)=>{
//     res.sendFile(__dirname+"/index.html")
// })
// app.get("/about",(req,res)=>{
//     res.sendFile(__dirname+"/about.html")
// })
app.post("/users",(req,res)=>{
    //username,password
    let username= req.body.username;
    let password=req.body.password;
    res.json({
        username,
        password
    })
})


app.listen(4444,()=>{
    console.log("server started")
})