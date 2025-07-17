
let users=[
    {
        id:1,
        name:"Nitesh",
        age:24
    },
     {
        id:2,
        name:"Ritik",
        age:16
    }
]

function isAllowed(id){
    //id ka user dhundho,
    // fir uska age check kro > 18
    //filter return a new array
    let user = users.filter((u)=>{
        return u.id==id
    })[0]
    console.log(user);
    if(!user) return console.log("No user found")
    if(user.age<18) return console.log("Not eligible to vote")
    return console.log("eligible to vote")

}
isAllowed(1)


function isAllowed(id){
   return new Promise((resolve,reject)=>{
         let user = users.filter((u)=>{
        return u.id==id
    })[0]
    console.log(user);
    if(!user) return reject("No user found")
    if(user.age<18) return reject("Not eligible to vote")
    return resolve("eligible to vote")
    })
    //id ka user dhundho,
    // fir uska age check kro > 18
    //filter return a new array
}
isAllowed(1).then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})
console.log("start");
console.log("sum 2 number")