// let p= new Promise((resolve,reject)=>{
//     resolve("wada pura kiya")
//         })
// // console.log(p);

// p.then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
// console.log(err)
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
   return new Promise((resolve,reject)=>{
          //do some asynchronous opertaion
        let isProduct= product.filter((p)=> p.name==product_Name)[0];
        if(!isProduct){
            return reject("product is not available")
        }
        resolve(isProduct.amount)
    })   
}
buyProduct("Iphone 16").then((amount)=>{
    console.log(amount)
})
.catch((err)=>{
    console.log(err)
})