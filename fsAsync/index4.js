//fs using Asynchronous 
const fs = require("fs");

//1=> create a file and write a txt in it

// fs.writeFile( "file.txt","Hello,today is awesome", (err)=> {
//     console.log("file is created");
//     console.log(err);
   
// });

//2=>Add extra txt to the same file
// fs.appendFile("file.txt","Please like an Subscribe",(err)=>{
//     console.log("It is created");
//     console.log(err);
// });

//3=>read the file without the buffer data we use UTF-8 
fs.readFile("file.txt","UTF-8",(err, data) =>{
    console.log(data);
    console.log(err);
});
