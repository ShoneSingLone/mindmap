const spawnCommand = require("../utils/spawnCommand");
const download = require("../utils/download");
const dayjs = require("dayjs");

module.exports = async () => {
    let zipPath;
    try {
        const distPath = `http://localhost:3000/dists/remotedemo.tar.gz`;
        const fileName = `${dayjs().format("YYYYMMDDHHMMss")}_remotedemo.tar.gz`;
        zipPath = await download(distPath, fileName);
        global.emitToA(`zipPath: ${zipPath}`);
        /* TODO:解压 移动文件 */

    } catch (error) {
        global.emitToA(error);
    }

}