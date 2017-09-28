let express = require('express');
let cors = require('cors');
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
        express.mt.print(JSON.stringify(arguments));
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
    let userSQL = { queryAll: 'SELECT login_name, password FROM sys_user;' };
    dbTools.getData(req, res, userSQL.queryAll);
}).get('/one', function(req, res, next) {
    let param = req.query || req.params;
    let userSQL = { queryAll: 'SELECT login_name, password FROM sys_user;' };
    dbTools.getData(req, res, userSQL.queryAll);
});

module.exports = router;
