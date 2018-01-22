const Tools = require('./tools');
const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../4test.txt');
console.log("targetPath", targetPath);

Tools.writeFile(targetPath, targetPath)
    .then((data) => {
        console.log("writeFile", data);
        return Tools.copyFile(targetPath, targetPath + '.copy');
    })
    .then((data) => {
        console.log("copyFile", data);
        return Tools.unlink(targetPath);
    })
    .then((data) => {
        console.log("rmdir", data);
    })
    .catch((e) => {
        console.log("e", e);
    })
