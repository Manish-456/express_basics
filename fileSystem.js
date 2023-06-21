const {log : show, error} = console;
const fs = require('fs');
const path = require('path');

// Read the file from starter.txt lying under files folder and write the content of that file to lorem.txt programatically;
fs.readFile(path.join(__dirname, "files", "starter.txt"),
 {
    encoding : 'utf-8'
 },
(err, data) => {
    if(err) throw err;

    fs.writeFile(path.join(__dirname, 'files', "lorem.txt"),
     data,
      err => {
        if(err) throw err;
    })
});

fs.writeFile(path.join(__dirname, 'files', "index.css"), `
    *{
        margin : 0;
        padding : 0;
        box-sizing : border-box;
    
}`, err => error(err));

// fs.mkdir(path.join(__dirname, "js-core-1"), err => {
//    if(err){
//        error(`Error is ${err}`);
//        process.exit(1);
//    }
// });
fs.rmdir(path.join(__dirname, "js-core-1"), err => error(err));

// handle uncaught error
process.on('uncaughtException', err => {
    error(`There was uncaught error : ${err}`);
    process.exit(1);
})

