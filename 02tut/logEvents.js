const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const path = require("path");

const fs = require("fs"); 
const fsPromise = require("fs").promises;

async function emitEvent(msg) {
  const dateTime = `${format(new Date(), "yyyy-MM-dd\tHH-mm-ss")}`;
  const message = `${dateTime}\t${uuid()}\t${msg}\n`;
  if(!fs.existsSync(path.join(__dirname, "logs"))){
    await fsPromise.mkdir(path.join(__dirname, "logs"));
  }
  await fsPromise.appendFile(
    path.join(__dirname, "logs", "eventLogs.txt"),
    message
  );

  console.log(msg)
}

process.on("uncaughtException", err => {
  console.error('There is an Uncaught error : ', err);
  process.exit(1);
})

module.exports = emitEvent;
