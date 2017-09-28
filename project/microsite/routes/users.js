var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

// 导入MySQL模块
var mysql = require('mysql');
var dbConfig = require('../config/db');
// 创建MySQL连接池
var pool = mysql.createPool(dbConfig.mysql);

/**
 * [responseJSON description]
 * @param  {[type]} res [description]
 * @param  {[type]} ret [description]
 * @return {[type]}     [description]
 */
var responseJSON = function(res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '-200',
            msg: 'failed'
        });
    } else {
        res.json(ret);
    }
};
/**
 * [userSQL description]
 * @type {[type]}
 */
var userSQL = {
    queryAll: 'SELECT login_name, password FROM sys_user;',
};
// 添加用户
router.get('/queryall', function(req, res, next) {
    // 从连接池获取连接 
    pool.getConnection(function(err, connection) {
        // 获取前台页面传过来的参数  
        var param = req.query || req.params;
        // 建立连接 增加一个用户信息 
        connection.query(userSQL.queryAll, function(err, resultData) {
            if (resultData) {
                result = {
                    code: 200,
                    msg: '增加成功',
                    resultData:resultData
                };
            }
            // 返回json数据   
            responseJSON(res, result);
            // 释放连接
            connection.release();

        });
    });
});

module.exports = router;
