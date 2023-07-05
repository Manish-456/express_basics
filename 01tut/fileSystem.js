// const{error, log} = console;
// const fs = require('fs');
// const path = require('path');

// fs.readFile(path.join(__dirname, "files", "starter.txt"),  {
//     encoding : "utf-8"
// }, (err, data) => {
//     if(err) throw err;
//   fs.writeFile(path.join(__dirname, "files", "lorem.txt"), `{
//     data : ${data},
//     author : "Manish Tamang"
//   }` ,err => {
//     if(err) throw err;
//     log("Completed ✅☑");
//   })
// })

// fs.appendFile(path.join(__dirname, "files", "style.css"), `
//  .container{
//     width : 50%;
//     margin : 10px auto;
//  }

//  .box{
//     display : flex;
//     position : relative;
//     justify-content : center;
//     align-items : center;
//  }

//  `, err => {
//     if(err){
//         throw err;
//     }
//     log("Css added")
//  })

// process.on("uncaughtException", err => {
//     log("The uncaught error is ", err);
//     process.exit(1);
// });

//! FS Promises

const fsPromises = require('fs').promises;
const path = require('path');
async function fsOps() {
     try {
        const data = await fsPromises.readFile(
            path.join(__dirname, 'files', 'lorem.txt'),
         {
            encoding : 'utf-8'
        });
        await fsPromises.writeFile(path.join(__dirname, "files", 'starter.txt'), data);
        await fsPromises.rename(path.join(__dirname, "files", "starter.txt"), path.join(__dirname, "files", "new.txt"));
        await fsPromises.appendFile(path.join(__dirname, "files", "new.txt"), `\n\nI'm learning node.js currently`);
        // await fsPromises.unlink(path.join(__dirname, 'files', "starter.txt"));

     } catch (error) {
        console.log(error);
     }
}

// fsOps();
