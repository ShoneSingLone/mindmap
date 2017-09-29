// 导入MySQL模块
const fs = require('fs');
// let mysql = require('mysql');
// let dbConfig = require('../config/db');
// 创建MySQL连接池
// let pool = mysql.createPool(dbConfig.mysql);

let execSQL = function(req, res, sql, callback) {
    let rData = "",
        result = {
            code: '-200',
            msg: false,
            sql: sql,
            rData: rData
        },
        param = req.query || req.params;

    setTimeout(() => {
        try {
            rData = fs.readFileSync("./my_nodules/db/db.json","utf-8");
            if (rData) {
                result.code = "200";
                result.msg = true;
                result.rData = rData;
            };
            res.json(result);
        } catch (error) {
            result.err = error;
            res.json(result);
        }

    }, 1);

    // 从连接池获取连接 
    /*    pool.getConnection(function(err, connection) {
            // 获取前台页面传过来的参数  
            let param = req.query || req.params;
            // 建立连接 增加一个用户信息 
            connection.query(sql, function(err, rData) {
                // 返回json数据  
                let result = {
                    code: '-200',
                    msg: false,
                    err: err,
                    sql: sql,
                    rData: rData,
                    reqQuery: req.query,
                    reqParams: req.params
                };

                if (rData) {
                    result.code = "200";
                    result.msg = true;
                };
                res.json(result);
                // 释放连接
                connection.release();
                execSQLresult = true;
            });
        });
    */
}

/* 
function getPathName(argument) {
    fs.readFile("./contents.json", function (err, data) {
        if (err) throw err;

    });
} */
function serialize(value) {
    return JSON.stringify(value, function(key, value) {
        return value instanceof Buffer ? { type: 'Buffer', encoding: 'base64', string: value.toString('base64') } : value; 
    });
}

function deserialize(text) {
    return JSON.parse(text, function(key, value) {
        return ((value instanceof Object) && (value.type == 'Buffer')) ? new Buffer(value.string, value.encoding) : value; 
    });
}
module.exports = { getData: execSQL };
