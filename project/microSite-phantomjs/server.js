const fs = require('fs');
const URL = require('url');
const phantomjs = require('phantomjs-prebuilt');
const StringDecoder = require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf8');
const http = require('http');
const querystring = require('querystring');

const serverPort = 3000;
let routersCount = 0;



let getScreenshotPath = function (data) {
  const promise = new Promise((resolve, reject) => {
    console.log("getComputedStyle");
    let targetURL = data.url || 'https://www.baidu.com';
    let program = phantomjs.exec('phantomjs-web.js', targetURL);
    program.stdout.pipe(process.stdout);
    program.stderr.pipe(process.stderr);
    program.stdout.on("data", function (data) {
      console.info("data", decoder.write(data));
    });
    program.on('exit', code => {
      if (0 === code) {
        resolve(code);
      } else {
        reject(code);
      }
    });
  });
  return promise;
}

/* 
const program = phantomjs.exec('phantomjs-web.js');
program.stdout.pipe(process.stdout);
program.stderr.pipe(process.stderr);
program.stdout.on("data", function (data) {
  console.info("data", decoder.write(data));
});


program.on('exit', code => {
  console.info(code);
});

*/


let RoutersObj = function (req, res) {
  this.req = req;
  this.res = res;
  this.pathName = URL.parse(req.url).pathname;
  this.ext = this.pathName.match(/(\.[^.]+|)$/)[0];
  if (req.method === 'POST') {
    this.promiseToken = ((CV) => {
      return new Promise((resolve, reject) => {
        try {
          /**服务端接收post请求参数的流程
 * （1）给req请求注册接收数据data事件（该方法会执行多次，需要我们手动累加二进制数据）
 *      * 如果表单数据量越多，则发送的次数越多，如果比较少，可能一次就发过来了
 *      * 所以接收表单数据的时候，需要通过监听 req 对象的 data 事件来取数据
 *      * 也就是说，每当收到一段表单提交过来的数据，req 的 data 事件就会被触发一次，同时通过回调函数可以拿到该 段 的数据
 * （2）给req请求注册完成接收数据end事件（所有数据接收完成会执行一次该方法）
 */

          //创建空字符叠加数据片段
          let data = '';

          //2.注册data事件接收数据（每当收到一段表单提交的数据，该方法会执行一次）
          CV.req.on('data', (chunk) => {
            // chunk 默认是一个二进制数据，和 data 拼接会自动 toString
            data += chunk;
          });

          // 3.当接收表单提交的数据完毕之后，就可以进一步处理了
          //注册end事件，所有数据接收完成会执行一次该方法
          CV.req.on('end', () => {

            //（1）.对url进行解码（url会对中文进行编码）
            data = decodeURI(data);
            console.log(data);

            /**post请求参数不能使用url模块解析，因为他不是一个url，而是一个请求体对象 */

            //（2）.使用querystring对url进行反序列化（解析url将&和=拆分成键值对），得到一个对象
            //querystring是nodejs内置的一个专用于处理url的模块，API只有四个，详情见nodejs官方文档
            CV.postData = querystring.parse(data);
            resolve(CV);
          });
        } catch (error) {
          reject(error);
        }
      })
    })(this);
  }


}
let routers = {
  ContentTypeMap: new Map([
    [".css", "text/css"],
    [".js", "application/javascript"]
  ]),
  setCurrentValues: function (currentValues) {
    this.CV = currentValues;
  },
  handleStatic: function () {
    ((CV) => {
      fs.readFile(__dirname + '/public' + CV.req.url, 'utf-8', (err, data) => { //读取内容
        if (err) {
          try {
            throw err;
          } catch (error) {
            CV.res.writeHead(404, {
              "Content-Type": this.ContentTypeMap.get(CV.ext)
            });
            return CV.res.end("<pre>" + error + "</pre>");
          }
        } else {
          let ContentType = this.ContentTypeMap.get(CV.ext)
          CV.res.writeHead(200, {
            "Content-Type": ContentType
          });
          return CV.res.end(data);
        }
      });
    })(this.CV)
  },
  handlePage: function () {
    fs.readFile(__dirname + '/index.html', 'utf-8', (err, buffer) => { //读取内容
      if (err) {
        try {
          throw err;
        } catch (error) {
          this.CV.res.writeHead(404, {
            "Content-Type": "text/html"
          });
          return this.CV.res.end("<pre>" + error + "</pre>");
        }
      } else {
        this.CV.res.writeHead(200, {
          "Content-Type": "text/html"
        });
        // res.write(buffer);
        return this.CV.res.end(buffer);
      }
    });

  },
  handleAsync: function () {
    if (this.CV.req.method === 'POST') {
      this.CV.promiseToken.then((CV) => {
        return getScreenshotPath(CV.postData)
      }).then((buffer) => {
        // TODO


        // this.CV.res.writeHead(200, {
        //   "Content-Type": "application/json;charset=UTF-8"
        // });
        this.CV.res.writeHead(200, {
          "Content-Type": 'text/plain'
        });
        return this.CV.res.end({ buffer: 'asdfasdfsadfasdfasdf' });
      }).catch(e => { return console.log(e) });
    } else {
      this.CV.res.writeHead(404, {
        "Content-Type": "text/html"
      });
      return this.CV.res.end("<pre>" + error + "</pre>");
    }

    // default:
    //   return res.writeHead(200, {
    //     "Content-Type": "text/json"
    //   });
    //   // res.write(buffer);
    //   return res.end();


  },
  dispatch: function () {
    const staticClassSet = new Set([".css", ".js"]);
    const pageClassSet = new Set(["", ".html"]);
    const asyncClassSet = new Set([".async"]);
    if (staticClassSet.has(this.CV.ext)) {
      return this.handleStatic();
    }
    if (pageClassSet.has(this.CV.ext)) {
      return this.handlePage();
    }
    if (asyncClassSet.has(this.CV.ext)) {
      return this.handleAsync();
    }
  }
};

const server = http.createServer();

//3.添加响应事件
server.on('request', function (req, res) {

  let currentValues = new RoutersObj(req, res);
  currentValues.routersCount = routersCount++;
  routers.setCurrentValues(currentValues);

  return routers.dispatch();
  //1.通过判断url路径和请求方式来判断是否是表单提交
});

server.listen(serverPort);