const Path = require("path");
const Marked = require('marked');
const Cheerio = require("cheerio"); //Html DOM 处理
const Highlight = require('highlight.js');
const Tools = require("./tools");


let renderer = new Marked.Renderer();
renderer.headerIdPrefix = 0;
renderer.heading = function (text, level, raw) {
    return '<h' + level + ' id="' + (this.headerIdPrefix++) + this.options.headerPrefix + raw.toLowerCase().replace(/[^\w]+/g, '-') + '" class="content">' +
        text +
        '</h' + level + '>\n';
}

Marked.setOptions({
    renderer,
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
        code = Highlight.highlightAuto(code).value;
        return code;
    }
});

// console.log(__dirname);
// console.log(__filename);


/**
 * 只识别md后缀文件，不需要后缀
 */
exports.dealFile = function (root, file) {
    Promise.all(
            [
                Tools.readFile(Path.join(root, '/layout/header.html')),
                Tools.readFile(Path.join(root, '/doc/' + file + '.md'))
            ])
        .then((dataArray) => {
            let data = "",
                noteName = Path.join(root, '/view/', file + Tools.nowDateString() + '.html');
            if (dataArray && dataArray.length === 2) {
                var $ = Cheerio.load(dataArray[0]);
                $("#main-contents").html(Marked(dataArray[1]));
                data = $.html();
            }
            return Tools.writeFile(noteName, data);
        }).then(() => {
            var message = ["*****output: " + root + '/view/' + file + Tools.nowDateString() + '.html****'];
            var mark = [];
            mark.length = new Number(message[0].length);
            mark = mark.join("*") + "*";
            message.unshift(mark);
            message.push(mark);
            console.log(message.join("\n"));
        }).catch(err => {
            console.log(err);
        })
};