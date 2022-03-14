// const name ="Umesh chandra Juyal";
// console.log(`My name is ${name}`);

//File System(fs) core modules in Synchronous
const fs = require("fs");

//Creating a new file and then write 
// 1=> fs.writeFileSync

fs.writeFileSync("read.txt","Hello ,I am Umesh Chandra Juyal I am new in Node js and I have to worked hard for this to know the concept of Node js");

//In this case the new text will printed of same read.txt file
// fs.writeFileSync("read.txt","I am new in Node js and I have to worked hard for this to know the concept of Node js ");

//Adding another text to the same file 
//2 => fs.appendFileSync(" ", " ")
fs.appendFileSync("read.txt","I am a web developer");

//3=>readFileSync(filename)
//Buffer is a  datatype which is used to store binary data

const buf_data=fs.readFileSync("read.txt");
console.log(buf_data);  

//buffer form
// {/* <Buffer 49 20 61 6d 20 6e 65 77 20 69 6e 20 4e 6f 64 65 20 6a 73 20 61 6e 64 20 49 20 68 61 76 65 20 74 6f 20 77 6f 72 6b 65 64 20 68 61 72 64 20 66 6f 72 20 ... 55 more bytes> */}

// //buffer data to string form
org_data =buf_data.toString();
console.log(org_data);

//5=> rename the name
// fs.renameSync('','')
fs.renameSync("read.txt","readwrite.txt");
