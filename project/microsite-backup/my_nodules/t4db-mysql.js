// 导入MySQL模块
let mysql = require('mysql');
let dbConfig = require('../config/db');
// 创建MySQL连接池
let pool = mysql.createPool(dbConfig.mysql);

let execSQL = function(req, res, sql, callback) {
    let execSQLresult = false;
    // 从连接池获取连接 
    pool.getConnection(function(err, connection) {
        // 获取前台页面传过来的参数  
        let param = req.query || req.params;
        // 建立连接 增加一个用户信息 
        connection.query(sql, function(err, resultData) {
            // 返回json数据  
            let result = {
                code: '-200',
                msg: false,
                err: err,
                sql: sql,
                resultData: resultData,
                reqQuery: req.query,
                reqParams: req.params
            };

            if (resultData) {
                result.code = "200";
                result.msg = true;
            };
            res.json(result);
            // 释放连接
            connection.release();
            execSQLresult = true;
        });
    });
    return execSQLresult;
}

module.exports = { execSQL: execSQL };
