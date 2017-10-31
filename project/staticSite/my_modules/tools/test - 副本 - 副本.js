var fs = require('fs')
var Q = require('q');

//1.写一个读取目录的方法，将它封装成promise
fs_readDir = function (file, encoding = "utf-8") {
    var deferred = Q.defer();
    fs.readdir(file, encoding, function (err, data) {
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
}
Q.all([
    fs_readDir("D:/GitHub/mindmap/project/staticSite/node_modules/highlight.js/styles")
]).then(function (dataArray) {
    return fs_writeFile(dataArray.join(" "), __dirname + "/rec.txt")
}, function (err) {
    console.log(err);
})