var fs = require('fs');
var Q = require('q');
var strDate = require("./toString").dateToString();
var marked = require('marked');
var highlight = require('highlight.js');
var cheerio = require("cheerio");     //Html DOM 处理
var renderer = new marked.Renderer();
renderer.idPrefix = 0;
renderer.heading = function (text, level, raw) {
    return '<h'
        + level
        + ' id="' + (this.idPrefix++) +
        + this.options.headerPrefix
        + raw.toLowerCase().replace(/[^\w]+/g, '-')
        + '" class="content">'
        + text
        + '</h'
        + level
        + '>\n';
}

marked.setOptions({
    renderer,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
        code = highlight.highlightAuto(code).value;
        return code;
    }
});

var fs_readFile, fs_writeFile, qFileIO;

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


console.log(__dirname);
console.log(__filename);

qFileIO = function (root, file) {
    Q.all([
        fs_readFile(root + '/layout/header.html'),
        fs_readFile(root + '/doc/' + file + '.md'),
        // fs_readFile(root + '/layout/footer.html')
    ]).then(function (dataArray) {

        let data = "";
        if (dataArray && dataArray.length === 2) {
            var $ = cheerio.load(dataArray[0]);
            $("#main-contents").html(marked(dataArray[1]));
            data = $.html();
        }
        return fs_writeFile(data, root + '/view/' + file + strDate + '.html');
    }).then(function () {
        var message = ["*****output: " + root + '/view/' + file + strDate + '.html****'];
        var mark = [];
        mark.length = new Number(message[0].length);
        mark = mark.join("*") + "*";
        message.unshift(mark);
        message.push(mark);
        console.log(message.join("\n"));
    }).fail(function (err) {
        console.log(err);
    });
}

exports.dealFile = qFileIO;
