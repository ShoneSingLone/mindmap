const express = require('express');
const cors = require('cors');
const _ = require('lodash');
const ps = require('current-processes');

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
    origin: function(origin, callback) {
        // for (let attr of arguments) {
        //     express.mt.print(attr + ": " + arguments[attr]);
        // }
        express.mt.print("origin: " + origin);
        // express.mt.print("req: " + req);

        callback(null, true)
            /*        if (whitelist.indexOf(origin) !== -1) {
                        callback(null, true)
                    } else {
                        callback(new Error('Not allowed by CORS'))
                    }
            */
    }
}

router.use(cors(corsOptions));
router.get('/all', function(req, res, next) {
    let param = req.query || req.params;
    let userSQL = { queryAll: 'Show me my money.' };
    dbTools.getData(req, res, userSQL.queryAll);
});

router.get('/platform-info', function(req, res, next) {
    let param = req.query || req.params; {
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

module.exports = router;
