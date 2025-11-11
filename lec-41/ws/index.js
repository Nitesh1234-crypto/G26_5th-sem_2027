const { WebSocketServer } = require('ws');
const {subscriber}= require("../shared/index");
const wss = new WebSocketServer({ port: 8080 });
let allsocket=[]
wss.on('connection', function connection(ws) {
  ws.on('error', console.error);
  allsocket.push();

 (async function orderbookUpdate(){
    await subscriber.connect();
   await subscriber.SUBSCRIBE("book_Update",(message)=>{
    let parsedMessage = JSON.parse(message);
    broadcast(JSON.stringify(parsedMessage))

   })
})()
})
 //IIFE --Immediately innvoking function 


function broadcast(message){
    allsocket.forEach((s)=>{
        s.send(message)
    })
}