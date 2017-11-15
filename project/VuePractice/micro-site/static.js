const http = require('http');
var fs = require('fs')
const Q = require('q');

const hostname = '127.0.0.1';
const port = 3000;


const server = http.createServer(function (req, res) {
  var pathname = url.parse(req.url).pathname;
  var ext = pathname.match(/(\.[^.]+|)$/)[0];//取得后缀名
  switch (ext) {
    case ".css":
    case ".js":
      fs.readFile("." + req.url, 'utf-8', function (err, data) {//读取内容
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
      fs.readFile('./index.html', 'utf-8', function (err, data) {//读取内容
        if (err) throw err;
        res.writeHead(200, {
          "Content-Type": "text/html"
        });
        res.write(data);
        res.end();
      });

  }

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });


/* //1.写一个读取文件的方法，将它封装成promise
let fs_readFile = function (file, encoding = "utf-8") {
  var deferred = Q.defer();
  fs.readFile(file, encoding, function (err, data) {
    if (err) deferred.reject(err);
    else deferred.resolve(data);
  })
  return deferred.promise;
}

Q.all([
  fs_readFile('micro-site/dist/index.html')]
).then(function (dataArray) {
  const server = http.createServer((req, res) => {
    let html = dataArray[0] ? dataArray[0] : "<h1>Erro</h1>";
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    // res.write(html);
    // res.end();

    res.writeHead(200, {
      "Content-Type": "text/html"
    });
    res.write(html);
    res.end(html);
  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
}).fail(function (err) {
  console.log(err);
});
 */

