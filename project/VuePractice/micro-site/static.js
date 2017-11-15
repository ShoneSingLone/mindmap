const http = require('http');
let fs = require('fs')
let url = require('url');
const Q = require('q');
const hostname = '127.0.0.1';
const port = 3000;
const currentRoot = "micro-site/dist";
console.log(__dirname);
console.log(__filename);


const server = http.createServer(function (req, res) {
    let pathname = url.parse(req.url).pathname;
    let ext = pathname.match(/(\.[^.]+|)$/)[0]; //取得后缀名
    switch (ext) {
        case ".css":
        case ".js":
            fs.readFile(currentRoot + req.url, 'utf-8', function (err, data) { //读取内容
                if (err) throw err;
                res.writeHead(200, {
                    "Content-Type": {
                        ".css": "text/css",
                        ".js": "application/javascript",
                    }[ext]
                });
                res.write(data);
                res.end();
            });
            break;
        default:
            fs.readFile(currentRoot + '/index.html', 'utf-8', function (err, data) { //读取内容
                if (err) throw err;
                res.writeHead(200, {
                    "Content-Type": "text/html"
                });
                res.write(data);
                res.end();
            });

    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
