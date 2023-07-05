const fs = require("fs");
const fsPromise = require("fs").promises;
const { v4 : uuid} = require("uuid");
const { format } = require("date-fns");
const path = require("path");

async function eventLogger(reqType, reqUrl, reqOrigin, fileName) {
  const dateTime = format(new Date(), "yyyy-MM-dd\tHH-mm-ss");
  const message = `${reqType} ${reqUrl}\t${dateTime}\t${uuid()}\t${reqOrigin}\n`;
  if(!fs.existsSync(path.join(__dirname, "log"))){
   await fsPromise.mkdir(path.join(__dirname, "log"));
  }
  await fsPromise.appendFile(path.join(__dirname, "log", fileName), message);
}

function logger(req, res, next){
  eventLogger(req.method, req.url , req.headers.origin, "eventLogging.txt");
  next();
}

module.exports = logger;


