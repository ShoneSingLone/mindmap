const fs = require('fs');


const
  //打印带有代码所在文件、行
  print = function () {
    try {
      throw new Error();
    } catch (e) {
      var eStackArray = e.stack.split("\n");
      if (eStackArray.length > 2) console.error(eStackArray[2]);
      if (arguments.length > 0) console.warn(arguments[0]);
    }
  },
  //读取文件的方法
  readFile = function (file, encoding = "utf-8") {
    return new Promise((resolve, reject) => {
      fs.readFile(file, encoding, function (err, data) {
        if (err) reject(err);
        else resolve(data);
      })
    })
  },
  writeFile = function (file, data, encoding = "utf-8") {
    return new Promise((resolve, reject) => {
      fs.writeFile(file, data, encoding, function (err) {
        if (err) reject(err);
        else resolve(file + ' write sucess.');
      })
    })
  },
  //追加文件
  appendFile = function (file, data, encoding = "utf-8") {
    return new Promise((resolve, reject) => {
      fs.appendFile(file, data, encoding, function (err) {
        if (err) reject(err);
        else resolve(file + ' write sucess.');
      })
    })
  },
  copyFile = function (source, destination, isDelete = false) {
    if (isDelete) {
      return (function () {
          return new Promise((resolve, reject) => {
            fs.copyFile(source, destination, (err) => {
              if (err) reject(err);
              else resolve(source + ' was copied to' + destination);
            });
          });
        })()
        .then((data) => {
          return unlink(source);
        })
    } else {
      return new Promise((resolve, reject) => {
        fs.copyFile(source, destination, (err) => {
          if (err) reject(err);
          else resolve(source + ' was copied to' + destination);
        });
      });
    }
  },
  // 删除文件
  unlink = function (path) {
    return new Promise((resolve, reject) => {
      fs.unlink(path, (err) => {
        if (err) reject(err);
        else resolve(path + ' was removed');
      });
    });
  },
  mkdir = function (path) {
    return new Promise((resolve, reject) => {
      fs.exists(path, (exists) => {
        exists ? resolve(path + 'exist') : fs.mkdir(path, (err) => {
          if (err) reject(err);
          else resolve(path + 'exist');
        })
      });
    });
  },
  //删除非空文件目录，如果path是文件而非文件目录会报错
  rmdir = function (path) {
    return new Promise((resolve, reject) => {
      fs.rmdir(path, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(path + ' was removed');
        }
      });
    });
  },
  exists = function (path) {
    return new Promise((resolve, reject) => {
      fs.exists(path, (exists) => {
        exists ? resolve(path) :
          reject(false);
      })
    });
  };




function nowDateString() {
  var date = new Date();
  var dateArray = [(date.getFullYear()), (date.getMonth() + 1 + ""), (date.getDate()), getDate(date.getHours()), (date.getMinutes()), (date.getMilliseconds())];
  return dateArray.join("");
}

function getDate(date) {
  var date = new Number(date);
  var dateStrArray = [];
  dateStrArray.push(Math.floor(date / 10));
  dateStrArray.push(date % 10);
  return dateStrArray.join("");
}

module.exports = {
  print,
  readFile,
  copyFile,
  unlink,
  mkdir,
  rmdir,
  writeFile,
  appendFile,
  exists,
  nowDateString
}