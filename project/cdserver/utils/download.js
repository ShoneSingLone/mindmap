var fs = require("fs");
var path = require("path");
var request = require("request");

module.exports = (remoteUrl, fileName) => {
    global.emitToA(`download: ${remoteUrl} ${fileName}`);
    return new Promise((resolve, reject) => {
        //创建文件夹目录
        var dirPath = path.join("targz");
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath);
        }

        const targetPaht = path.join(dirPath, fileName);
        let stream = fs.createWriteStream(targetPaht);
        request(remoteUrl)
            .pipe(stream)
            .on("close", (err) => {
                let res = "下载文件失败";
                if (err) {
                    reject(err)
                    return global.emitToA({
                        res,
                        err
                    })
                }
                global.emitToA(`${fileName}下载完毕`);
                resolve(path.resolve(__dirname, targetPaht));
            });

    });
}