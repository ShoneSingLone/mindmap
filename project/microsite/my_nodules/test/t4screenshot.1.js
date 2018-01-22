const URL = require('url');
const StringDecoder = require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf8');
const path = require('path')
const phantom = require('phantom');
const Tools = require('./tools');

const getScreenshotPath = function (url) {
    let _page, _ph;
    return phantom.create()
        .then((phantomInstance) => {
            _ph = phantomInstance;
            return _ph.createPage();
        })
        .then((page) => {
            _page = page;
            return _page.open('https://www.baidu.com/');
        })
        .then((status) => {
            console.log("status", status);
            return _page.property('content');
        })
        .then((content) => {
            return Tools.writeFile('./targetPath.json', content);
        })
        .then((content) => {
            return _page.close();
        })
        .then((content) => {
            _ph.exit();
        })
        .catch((e) => {
            _page.close();
            _ph.exit();
        });
}

module.exports = { getScreenshotPath };
