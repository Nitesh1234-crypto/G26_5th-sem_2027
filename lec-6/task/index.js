const fs=require("fs");
// let result1=null;
// let result2=null
 fs.readFile("../demo.txt","utf-8",function(err,data1){
    if(err) return console.log(err);
    // console.log(data1)
    fs.readFile("../demo2.txt","utf-8",function(err,data2){
        if(err) return console.log("error in second file");
            fs.writeFile("./result.txt",data1+"\n"+data2,function(err){
                if(err) console.log(err);
                console.log("done")
            })
    })
})
//  fs.readFile("../demo2.txt","utf-8",function(err,data2){
//     if(err) return console.log(err);
//     console.log(data2)
//     result2=data2
// })
// let data2=result1 +result2;


console.log(process.argv);