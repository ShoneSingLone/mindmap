var fs = require('fs');
var Q = require('q');
var cheerio = require("cheerio");     //Html DOM 处理

var//  读取目录
    fs_readdir = function (file, encoding = "utf-8") {
        var deferred = Q.defer();
        fs.readdir(file, encoding, function (err, data) {
            if (err) deferred.reject(err);
            else deferred.resolve(data);
        })
        return deferred.promise;
    }, fs_readFile, fs_writeFile, qFileIO;

console.log(__dirname);

const rootdir = __dirname + "/v2/guide";

let isC = true;
Q.all(
    fs_readdir(rootdir)
).then((fileNameArray) => {
    fileNameArray.map((fileName, index, arr) => {
        fileName = (rootdir + "/" + fileName);
        let fileContent = fs.readFileSync(fileName, encoding = "utf-8");
        let $ = cheerio.load(fileContent);

        ["/v2", "/images", "/css", "/js"].map((val) => {
            (function (val) {
                $('[href^="' + val + '"]').map((index, ele) => {
                    let orgHref = $(ele).attr('href');
                    $(ele).attr('href', "../.." + orgHref);
                })
                $('[src^="' + val + '"]').map((index, ele) => {
                    let orgHref = $(ele).attr('src');
                    $(ele).attr('src', "../.." + orgHref);
                })
            })(val)
        });
        fileContent = $.html();
        fs.writeFileSync(fileName, fileContent, encoding = "utf-8")
    })
}).fail(function (err) {
    console.log(err);
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
}

//2.写一个写入文件方法，将它封装成promise
fs_appendFile = function (data, file, encoding = "utf-8") {
    var deferred = Q.defer();
    fs.appendFile(file, data, encoding, function (err) {
        if (err) deferred.reject(err);
        else deferred.resolve('success');
    });
    return deferred.promise;
}




