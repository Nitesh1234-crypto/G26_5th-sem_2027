// function buyProduct(product_Name,cb){
//     //do some asynchronous opertaion
//     setTimeout(()=>{
//         //all the operation completed
//         console.log("all the I/o is completed and order details are written in user data")
//         cb();
//     },0)
// }

// buyProduct("Iphone 16",function(){
//     console.log("product is purchased")
// })
let product=[{
    name:"samsung",
    amount:70000,
    quantity:10
},
{
    name:"Iphone 16",
    amount:100000,
    quantity:0
}
]
function buyProduct(product_Name){
    //do some asynchronous opertaion
   return new Promise((resolve,reject)=>{
         let isProduct= product.filter((p)=> p.name==product_Name)[0];
    if(!isProduct){
       return reject("product is not available")
    }
    resolve(isProduct.amount);
    })
  
    
}
let availableAmount=80000000;
function deductbankamount(amount){
    ///do some Transactions
    return new Promise((resolve,reject)=>{
 if(amount>availableAmount){
       return reject("bank balance is low")
    }else{
        availableAmount-=amount;
        resolve("amount deducted");
        // cb(null,"amount deducted");
    }
    })
   
  
}
// buyProduct("Iphone")
// .then((data)=>{
// console.log(data)
// return deductbankamount(data)
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })


// console.log("start")
// let a=10;
// let b=15;
// let c=a+b;
// function sum(a,b){
//     return a+b
// }
// let result = sum(5,4);
// console.log(result)
async function domytask(){
try {
    let amount=await buyProduct("Iphone 16");
let mes=await deductbankamount(amount);
console.log(mes)
} catch (error) {
    console.log(error);
}
}
console.log(domytask());
console.log("start");

