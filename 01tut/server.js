const os = require('os');
const path = require("path");
const {add, subtract, divide, multiply} = require("./math");

/*
How NodeJs differs from Vanilla Js
1) Node runs on a server - not in a browser (backend not frontend)
2) The console is in the terminal window
3) global object instead of window object
4) Has Common Core modules that we will explore
5) CommonJs modules instead of ES6 Modules
6) Missing some of the JS Apis like fetch;
*/

console.log("Hello world!");
// console.log(global);

// no. 5 example 

console.log(os.arch());
console.log(os.freemem());
console.log(os.type())
console.log(os.homedir())
console.log(os.version());
console.log(__dirname)

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__dirname));

console.log(add(4, 7));
console.log(subtract(4, 2));
console.log(divide(8, 2));
console.log(multiply(4, 5));

