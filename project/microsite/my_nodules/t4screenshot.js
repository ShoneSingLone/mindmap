const URL = require('url');
const StringDecoder = require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf8');
const path = require('path')
const phantom = require('phantom');
const moment = require('moment');

const Tools = require('./tools');
const T4db = require('../my_nodules/t4db');



const getScreenshotPath = function (targetURL, imglibMap) {
    const
        delayTime = 3000,
        pngName = moment().format("ddddMMMMYYYYhmmssa").toString().trim() + '.png';
    let _page, _ph;

    return phantom.create()
        .then((phantomInstance) => {
            _ph = phantomInstance;
            return _ph.createPage();
        })
        .then((page) => {
            _page = page;
            return _page.open(targetURL);
        })
        .then((status) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(delayTime)
                }, delayTime);
            });
        })
        .then((_delayTime) => {
            return _page.render(path.join(__dirname, '..', './public/screenshot/', pngName));
        })
        .then((_content) => {
            return _ph.exit();
        }).then((content) => {
            // console.log(imglibMap);
            imglibMap.set(targetURL, '/screenshot/' + pngName);
            return Tools.writeFile('my_nodules/db/imglib.json', T4db.map2string(imglibMap));
        })
        .catch((e) => {
            // console.log("e", e);
            // _page.close();
            _ph.exit();
        });
}

module.exports = { getScreenshotPath };
