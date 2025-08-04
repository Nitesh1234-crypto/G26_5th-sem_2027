let box=document.querySelector(".box");
let genbtn=document.querySelector(".btn");
let stopbtn=document.querySelector(".stop");
let colors=["red","black","blue","green","orange","brown","yellow","purple","pink","grey"]
let intervalId=null
function randomcolor(){
    let index= Math.floor(Math.random()*10);
    let color=colors[index];
    return color

}

genbtn.addEventListener("click",function(){
    // let color=randomcolor()
    // box.style.background=color;
    intervalId=setInterval(()=>{
    let color=randomcolor()
    box.style.background=color;
    },500)
})
stopbtn.addEventListener("click",function(){
    if(intervalId){
    clearInterval(intervalId)
    }
})