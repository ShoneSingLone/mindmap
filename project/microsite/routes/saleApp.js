const express = require('express');
const cors = require('cors');
const _ = require('lodash');
const ps = require('current-processes');
const appData = require('./data-json/saleApp.json');
/*
@see https://www.npmjs.com/package/cors
@see https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS
*/
let router = express.Router();
let dbTools = require('../my_nodules/t4db');

var whitelist = [
    'http://localhost:3000',
    'http://example2.com'
];

var corsOptions = {
    origin: function (origin, callback) {
        express.mt.print("origin: " + origin);
        callback(null, true)
    }
}

router.use(cors(corsOptions));
router.get('/seller', function (req, res, next) {
    res.json(appData.seller);
});
router.get('/goods', function (req, res, next) {
    res.json(appData.goods);
});
router.get('/ratings', function (req, res, next) {
    res.json(appData.ratings);
});

module.exports = router;
