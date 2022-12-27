/*fssync.js 
동기식= 블록킹 함수*/
const fs = require("fs");
let data = fs.readFileSync("./template/test.txt", "utf8");
console.log(data);
console.log("the end");
