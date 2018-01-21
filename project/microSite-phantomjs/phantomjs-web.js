const page = require('webpage').create();
const moment = require('moment');
// const system = require('system');
// try {
//   let args = system.args;
//   if (args.length === 1) {
//     console.log('Try to pass some arguments when invoking this script!');
//   } else {
//     args.forEach(function (arg, i) {
//       console.log(i + ': ' + arg);
//     });
//   }
// } catch (error) {
//   console.log("error", error);
// }


const pngName = moment().format("ddddMMMMYYYYhmmssa").toString().trim();
const path = './public/screenshot/' + pngName + '.png';

page.viewportSize = { width: 1440, height: 900 };

page.open('https://leancloud.cn/docs', function (status) {
  console.log('open', status);
  console.log('path', path);
  page.render(path, { format: 'png' });
  page.close();
  debugger;
  phantom.exit(0);
});


/* const page = require('webpage').create();
const system = require('system');
const moment = require('moment');
const fs = require('fs');

let args = system.args;
if (args.length === 1) {
  console.log('Try to pass some arguments when invoking this script!');
} else {
  args.forEach(function (arg, i) {
    console.log(i + ': ' + arg);
  });
}

const pngName = moment().format("ddddMMMMYYYYhmmssa").toString().trim();
const path = './screenshot/' + pngName + '.png';

page.viewportSize = { width: 1440, height: 900 };

page.open('https://www.baidu.com', function (status) {
  console.log('open', status);
  page.render(path, { format: 'png' });
  phantom.exit(1024);
});


//1.写一个读取文件的方法，将它封装成promise
fs_readFile = function (file, encoding = "utf-8") {
  var deferred = Q.defer();
  fs.readFile(file, encoding, function (err, data) {
    if (err) deferred.reject(err);
    else deferred.resolve(data);
  })
  return deferred.promise;
}

//2.写一个写入文件方法，将它封装成promise
fs_writeFile = function (data, file, encoding = "utf-8") {
  var deferred = Q.defer();
  fs.writeFile(file, data, encoding, function (err) {
    if (err) deferred.reject(err);
    else deferred.resolve('success');
  })
  return deferred.promise;
} */