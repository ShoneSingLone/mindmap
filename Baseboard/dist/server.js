const http = require('http');
const fs = require('fs')
const url = require('url');
const Q = require('q');
const hostname = '127.0.0.1', port = 3000;

const server = http.createServer(function (req, res) {
    let pathname = url.parse(req.url).pathname;
    // / static / js / app.e2d617914f80976269fc.js
    //取得后缀名
    let ext = pathname.match(/(\.[^.]+|)$/)[0];
    switch (ext) {
        case ".css":
        case ".js":
            fs.readFile(__dirname + req.url, 'utf-8', function (err, data) { //读取内容
                if (err) {
                    try {
                        throw err;
                    } catch (error) {
                        res.writeHead(404, {
                            "Content-Type": {
                                ".css": "text/css",
                                ".js": "application/javascript",
                            }[ext]
                        });
                        res.write("<pre>" + error + "</pre>");
                    }
                } else {
                    res.writeHead(200, {
                        "Content-Type": {
                            ".css": "text/css",
                            ".js": "application/javascript",
                        }[ext]
                    });
                    res.write(data);
                }
                res.end();
            });
            break;
        default:
            fs.readFile(__dirname + '/index.html', 'utf-8', function (err, data) { //读取内容
                if (err) {
                    try {
                        throw err;
                    } catch (error) {
                        res.writeHead(404, {
                            "Content-Type": "text/html"
                        });
                        res.write("<pre>" + error + "</pre>");
                    }
                } else {
                    res.writeHead(200, {
                        "Content-Type": "text/html"
                    });
                    res.write(data);
                    res.end();
                }
            });
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
