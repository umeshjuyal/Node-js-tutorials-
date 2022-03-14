const os=require("os");

//os architecture
// console.log(os.arch());

//os free memory
// const freeMemory=os.freemem();
// console.log(`${freeMemory/1024/1024/1024}`);

//os total memory
// const totalMemory=os.totalmem();
// console.log(`${totalMemory/1024/1024/1024}`);

//hostname
console.log(os.hostname());

//plateform name
console.log(os.platform());

//temp dir
console.log(os.tmpdir());

//type 
console.log(os.type());