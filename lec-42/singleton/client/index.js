const Principal = require("../Principal/principal");

function suspend(studentName){
    // let principal = new Principal("Nitesh");
    // let principal2 = new Principal("Shubham"); // not possible
    let principal = Principal.getPrincipal();
    principal.suspend(studentName);
}
function notify(){
    // let principal = new Principal("Veer"); //not possible
    let principal = Principal.getPrincipal();
    // principal.notify("school band rhhenge abh nachoo")
}