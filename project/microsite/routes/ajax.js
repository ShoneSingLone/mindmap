const express = require('express');
const cors = require('cors');
const _ = require('lodash');
const ps = require('current-processes');
const Tools = require('../my_nodules/tools');
const T4s = require('../my_nodules/t4screenshot');
const T4db = require('../my_nodules/t4db');
const path = require('path');
const multer = require('multer');
const UPLOAD_PATH = './private/uploads';

const upload = multer({
    dest: UPLOAD_PATH
});

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
            res.json({
                e
            });
        });
});

//多文件上传
router.post('/upload', upload.single('file'), function (req, res, next) {
    const file = req.file;
    const libPath = path.join('my_nodules/db/uploadLib.json');
    Tools.exists(file.path).then(r => {
        return Tools.readFile(libPath)
    }).then(data => {
        let libArray = [];
        try {
            libArray = JSON.parse(data);
        } catch (error) {
            console.log("new libArray");
        }
        libArray.push({
            path: String(file.path),
            fileName: String(file.originalname)
        });
        data = JSON.stringify(libArray);

        return Tools.writeFile(libPath, data);
    }).then(r => {
        res.json({
            msg: file.originalname + '上传成功',
            status: true
        })
    }).catch(err => {
        console.log("err: ", err);
        res.json({
            err
        })
    });
})


/**
 * 获取可下载文件列表
 */
router.get('/list/:listType', function (req, res, next) {
    let param = req.query;
    let listType = req.params.listType;
    let rData = "",
        result = {
            code: '-200',
            msg: false,
            rData: rData
        },
        libPath = path.join('my_nodules/db/uploadLib.json');

    Tools.readFile(libPath).then(data => {
        if (data) {
            res.json({
                imgList: JSON.parse(data),
                status: true
            })
        } else {
            throw new Error("data erro");
        }
    }).catch(err => {
        console.log("err: ", err);
        res.json({
            err
        })
    });
});

router.post('/canidownload', function (req, res) {
    var realPath = req.body.row.path;

    Tools.exists(realPath).then(exists => {
        if (!exists) {
            res.json({
                status: false,
                err: "文件不存在"
            })
        } else {
            res.json({
                status: true,
                url: "文件不存在"
            })
            console.log("文件存在");
            // fs.readFile(realPath, "binary", function (err, file) {
            //     console.log(err ? "err" : "");
            //     res.write(realPath, "binary");
            //     res.end();
            // });
            res.download(realPath, String(req.query.name));
            // res.json({
            //     status: true,
            //     code: 200
            // });
        }

    })
});
router.get('/download', function (req, res) {
    var realPath = req.query.id;
    Tools.exists(realPath).then(exists => {
        if (!exists) {
            res.json({
                status: false,
                code: 404,
                err: "文件不存在"
            })
        } else {
            res.download(realPath, String(req.query.name));
        }

    })
});

module.exports = router;