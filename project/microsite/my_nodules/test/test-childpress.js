const { execFile } = require('child_process');
const phantomjs = require('phantomjs-prebuilt');

let binPath = phantomjs.path;

console.log(binPath);

const child = execFile(binPath, ['test.js'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }
  console.log(stdout);
});

