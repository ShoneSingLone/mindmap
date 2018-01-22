const fs = require('fs');


const
  print = function () {
    try {
      throw new Error();
    } catch (e) {
      var eStackArray = e.stack.split("\n");
      if (eStackArray.length > 2) console.error(eStackArray[2]);
      if (arguments.length > 0) console.warn(arguments[0]);
    }
  },
  //1.写一个读取文件的方法，将它封装成promise
  readFile = function (file, encoding = "utf-8") {
    return new Promise((resolve, reject) => {
      fs.readFile(file, encoding, function (err, data) {
        if (err) reject(err);
        else resolve(data);
      })
    })
  },
  //1.写一个读取文件的方法，将它封装成promise
  writeFile = function (file, data, encoding = "utf-8") {
    return new Promise((resolve, reject) => {
      fs.writeFile(file, data, encoding, function (err) {
        if (err) reject(err);
        else resolve(file + ' write sucess.');
      })
    })
  },
  // destination.txt will be created or overwritten by default.
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
  //删除非空文件目录，如果path是文件而非文件目录会报错
  rmdir = function (path) {
    return new Promise((resolve, reject) => {
      fs.rmdir(path, (err) => {
        if (err) reject(err);
        else resolve(path + ' was removed');
      });
    });
  }

module.exports = {
  print,
  readFile,
  copyFile,
  unlink,
  rmdir,
  writeFile
}
