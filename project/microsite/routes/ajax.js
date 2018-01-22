const express = require('express');
const cors = require('cors');
const _ = require('lodash');
const ps = require('current-processes');
const Tools = require('../my_nodules/tools');
const T4s = require('../my_nodules/t4screenshot');
const T4db = require('../my_nodules/t4db');


/*
@see https://www.npmjs.com/package/cors
@see https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS
*/
let router = express.Router();

var whitelist = [
    'http://localhost:3000',
    'http://example2.com'
];

router.use(cors());

router.get('/platform-info', function (req, res, next) {
    let param = req.query || req.params;

    {
        let rData = "",
            result = {
                code: '-200',
                msg: false,
                rData: rData
            },
            param = req.query || req.params;

        setTimeout(() => {
            ps.get((err, processes) => {
                var sorted = _.sortBy(processes, 'cpu');
                var rData = sorted.reverse().splice(0, 5);

                if (rData) {
                    result.code = "200";
                    result.msg = true;
                    result.rData = rData;
                };
                res.json(result);
            });
        }, 1);

    }
});

router.post('/screenshot', function (req, res, next) {
    let param = req.body || req.params;
    const targetURL = param.url || 'https://leancloud.cn/docs';

    Tools.readFile('my_nodules/db/imglib.json')
        .then((data) => {
            let imglibMap = T4db.string2map(data);
            if (imglibMap.has(targetURL)) {
                console.log("targetURL", targetURL);
                res.json({
                    rel: true,
                    data: imglibMap.get(targetURL)
                });
            } else {
                return T4s.getScreenshotPath(targetURL, imglibMap)
                    .then((data) => {
                        return Tools.readFile('my_nodules/db/imglib.json')
                    })
                    .then((data) => {
                        let imglibMap = T4db.string2map(data);
                        if (imglibMap.has(targetURL)) {
                            res.json({
                                rel: true,
                                data: imglibMap.get(targetURL)
                            });
                        }
                    });
            }
        })
        .catch(e => {
            res.json({ e });
        });
});



module.exports = router;
