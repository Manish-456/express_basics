// A stream is an abstract interface for working with streaming data in Node.js. The node:stream module provides an API for implementing the stream interface. There are many objects provided by Node.js. For instance, a request to an HTTP Server and process.stdout are both stream instances.

// Sometimes we can have a larger data and we don't want to send all those files all at once instead we can send it chunk by chunk or bucket by bucket with the help of stream module.

const fs = require('fs');
const path = require('path');

const rs = fs.createReadStream(path.join(__dirname, "files", "lorem.txt"), {encoding : "utf-8"});
const ws = fs.createWriteStream(path.join(__dirname, "files", "reply.txt"));

rs.pipe(ws);