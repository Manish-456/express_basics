// const fs = require("fs");
// const path = require("path");

// const remove = false;


// process.on("message", (data) => {
//   if (!fs.existsSync(path.join(__dirname, "files"))) {
//     fs.mkdir(path.join(__dirname, "files"));
//   }
  
//  if(!remove){
//     fs.appendFile(
//         path.join(__dirname, "files", "event.txt"),
//         `${data}\n`,
//         (err, _) => {
//           if (err) throw new Error(err);
//           console.log("done✅");
//         }
//       );
//  }else{
//     fs.unlink(path.join(__dirname, "files", "event.txt"), (err, _) => {
//         if(err) throw new Error(err);
//         console.log("file Removed")
//     })
//  }
// });
// process.on("signal", (signal) => console.log(signal));
// const ms = 2000;
// const message = `Event emitted after ${ms} milisecond`;
// setTimeout(() => {
//   process.emit("message", message);
// }, ms);

// process.emit("signal", "Whistle...");

// const fs = require('fs');

