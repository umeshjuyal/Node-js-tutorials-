// fs synchrounous
const fs =require('fs');

// const data=fs.readFileSync('file.txt',"utf-8");
// console.log(data);   //firstly it executes 
// console.log("after the file have to read"); //then it executes 

// fs asynchronous
 const data =fs.readFile('file.txt',"utf-8",(err,data)=>{
  console.log(data);        //after that it executes
//   console.log(err);
 })
console.log("After the Data");   //firstly execute 

