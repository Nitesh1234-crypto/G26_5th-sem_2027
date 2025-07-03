const fs=require("fs");
const start= Date.now()
const OS = require('os')
process.env.UV_THREADPOOL_SIZE = 10

console.log(process.env.UV_THREADPOOL_SIZE)
const {
  pbkdf2,
} = require('node:crypto');
// process.env.UV_THREADPOOL_SIZE=4;
// console.log(process.env.UV_THREADPOOL_SIZE)
console.log("start");
setTimeout(()=>{
    console.log("timer callback")
},0)
setImmediate(()=>{
    console.log("set immediate callback")
})
function dosometask(){
    return new Promise((resolve,reject)=>{
            resolve("promise chla")
    })
}
fs.readFile("demo.txt",(data)=>{
    console.log("poll phase callback");
    setTimeout(()=>{
        console.log("timer 2")
    },0)
    setImmediate(()=>{
        console.log("immd 2")
    })
        pbkdf2('secrettthhhh', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log(Date.now()-start)
  console.log(derivedKey.toString('hex'));});
        pbkdf2('secretsadasd', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log(Date.now()-start)
  console.log(derivedKey.toString('hex'));});
    pbkdf2('secretfdadsa', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log(Date.now()-start)
  console.log(derivedKey.toString('hex'));});
  pbkdf2('secretjkdsad', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log(derivedKey.toString('hex'));  // '3745e48...08d59ae'
  console.log(Date.now()-start)
      pbkdf2('secrdasdfhhh', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log(Date.now()-start)
  console.log(derivedKey.toString('hex'));});
      pbkdf2('secrdfdsfdsf', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
  if (err) throw err;
  console.log(Date.now()-start)
  console.log(derivedKey.toString('hex'));});
});
})
console.log("end")
// dosometask().then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })
// process.nextTick(()=>{
//     console.log("next tick")
// })