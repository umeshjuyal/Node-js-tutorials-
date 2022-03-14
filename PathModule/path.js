//Using Path Modules
const path =require("path");
console.log(path.dirname('C:\Users/umesh\Desktop\MongoDB- MERN\Node Js Youtube\PathModule\path.js'));
console.log(path.extname('C:\Users/umesh\Desktop\MongoDB- MERN\Node Js Youtube\PathModule\path.js'));
console.log(path.basename('C:\Users/umesh\Desktop\MongoDB- MERN\Node Js Youtube\PathModule\path.js'));

 const myPath=path.parse("C:\Users/umesh\Desktop\MongoDB- MERN\Node Js Youtube\PathModule\path.js");
console.log(myPath.name);
console.log(myPath.root);