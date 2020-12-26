const download = require("./download");
const dayjs = require("dayjs");
global.emitToA = () => {};
const remoteUrl = `http://localhost:3000/dists/remotedemo.tar.gz`;
const fileName = `remotedemo.tar.gz`;
console.log(`
download:
    ${remoteUrl}
    ${fileName}`);
(async () => {
    const targetFilePath = await download(remoteUrl, fileName);
    console.log("🚀 ~ file: download.test.js ~ line 11 ~ res", targetFilePath);
})();