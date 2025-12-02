function sum(a,b){
    if(!a || !b){
        return "all argument must be passed"
    }
    else if(typeof(a)!="number" || typeof(b)!="number"){
        return "all argument must be number"
    }
    return a+b;
}
// sum(2)----->
module.exports=sum;