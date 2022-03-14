//Crud Operation using fs async
const fs =require("fs");

//1=> Make dir
// fs.mkdir("./umeshNode",(err)=>{
//     console.log("hello I sucessfully created");
// })

 //2= >create a file and also write
//  fs.writeFile("./umeshNode/read.txt","Hello i am Umesh chandra Juyal ,I am good to see you",()=>{
//      console.log("Sucessfylly submited...");
//  });

 //3=>adding more data in the same file
//  fs.appendFile("./umeshNode/read.txt","Hello Everyone I am good to see you", (err)=>{
//     console.log("It is successfuly submitted");
//  });

 //4=>read data without using buffer data
// fs.readFile("./umeshNode/read.txt","utf-8", (err,data)=>{
//      console.log(data);
//      console.log(err);
//  })

 //5=> Reanme the file name
//  fs.rename("./umeshNode/read.txt","myfile.txt", (err)=>{
//      console.log(err);
//  })

 //6=> delete the file
//  fs.unlink("./umeshNode/myfile.txt", ( err)=>{
//      console.log("Sucessfully deleted the file");
//  })

 //deleting the dir
 fs.rmdir("./umeshNode",(err)=>{
     console.log("Sucessfully folder deleted");
 });
