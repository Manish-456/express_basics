const fs = require("fs");

const writeableStream = fs.createWriteStream("ghost.js");
process.stdin.pipe(writeableStream);

const readableStream = fs.createReadStream("ghost.js");
readableStream.pipe(process.stdout);
