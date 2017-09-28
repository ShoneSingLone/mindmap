let express = require('express');
let router = express.Router();
let dbTools = require('../my_nodules/t4db');

/* GET home page. */
router.get('/', function(req, res, next) {
    express.mt.print("index.js first");
    res.render('index', { title: 'Express' });
});

router.get('/queryall', function(req, res, next) {
    let param = req.query || req.params;
    let userSQL = { queryAll: 'SELECT login_name, password FROM sys_user;' };
    dbTools.execSQL(req, res, userSQL.queryAll);
});

module.exports = router;
