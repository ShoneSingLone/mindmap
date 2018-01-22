const fs = require('fs');
const URL = require('url');
const phantomjs = require('phantomjs-prebuilt');
const { execFile } = require('child_process')
const StringDecoder = require('string_decoder').StringDecoder;
const decoder = new StringDecoder('utf8');
const http = require('http');
const querystring = require('querystring');
const path = require('path')




const label = 'execByFile';






let getScreenshotPath = function(data) {
    const promise = new Promise((resolve, reject) => {
        try {
            let targetURL = data.url || 'https://www.baidu.com';
            // var phantomjs = require('phantomjs-prebuilt')
            var binPath = phantomjs.path
            var childArgs = [
                path.join(__dirname, './t4screenshot-phantomjs-web.js'),
                targetURL
            ];

            console.log("getScreenshotPath", new Date(),childArgs);
            execFile(binPath, childArgs, function (err, stdout, stderr) {
                console.log("execFile", new Date());
                if (error) {
                    reject(error);
                } else {
                    console.log(stdout);
                    console.log(new Date());
                    resolve(stdout);
                }
            })

            
          /*   
            let scriptPath = __dirname + '/t4screenshot-phantomjs-web.js';
            let program = phantomjs.exec(scriptPath, targetURL);
            program.stdout.pipe(process.stdout);
            program.stderr.pipe(process.stderr);
            program.stdout.on("data", function(data) {
                console.info("data", decoder.write(data));
            });
            program.on('exit', code => {
                if (0 === code) {
                    resolve(code);
                } else {
                    reject(code);
                }
            }); */
        } catch (error) {

        }
    });
    return promise;
}

module.exports = { getScreenshotPath };
