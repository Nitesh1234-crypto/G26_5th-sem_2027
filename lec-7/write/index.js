let users=[
    {
        name:"Niteshhh",
        age:"2445",
        address:"Delh34332424i"
    },
     {
        name:"Ritikrer",
        age:"252323",
        address:"Faridafdsbad"
    }
]
const fs = require("fs");
fs.writeFile("../users2.txt",JSON.stringify(users),function(err){
    if(err) return console.log(err);
    console.log("users written!!");
})