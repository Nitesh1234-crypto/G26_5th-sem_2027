const express = require("express");
const app = express();
const orderRoute= require("./routes/order")

app.use(express.json());
app.use("/api/v1/",orderRoute);



app.listen(3000,()=>{
    console.log("server started")
})