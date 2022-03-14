const fs =require("fs");

//make dir
fs.mkdirSync("umeshEx");

//create and write in file
fs.writeFileSync("umeshEx/bio.txt","Hello i am Umesh chandra Juyal : ");

//we add extra text in same file
fs.appendFileSync("umeshEx/bio.txt","I am web developer and also learning node js from Youtube");


//without getting the buffer data read the file 
const data=fs.readFileSync("umeshEx/bio.txt","utf-8");
console.log(data);

//rename the file name
fs.renameSync("umeshEx/bio.txt","mybio.txt");

//how to delete file
fs.unlinkSync("umeshEx/mybio.txt");

//how to delete the folder or dir
fs.rmdirSync("umeshEx");