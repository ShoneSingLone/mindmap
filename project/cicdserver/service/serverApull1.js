const execCommand = require("../utils/execCommand");
const spawnCommand = require("../utils/spawnCommand");
const gitCloneCommand = `git clone https://github.com/ShoneSingLone/remotedemo.git ../remotedemo`;

module.exports = async function () {
    let res;
    try {
        res = await execCommand(gitCloneCommand);
        console.log("🚀 ~ file: serverApull1.js success", res);
    } catch (e) {}

    try {
        res = await spawnCommand(`sh`, [`./shell_bat/serverApull1.sh`]);
    } catch (error) {
        console.log("🚀 ~ file: serverApull1.js error", error);
    }

    try {
        res = await global.axios.post("http://localhost:3001/serverB/deploy", {
            action: "serverApull1"
        });
    } catch (error) {
        global.IO.emit("msg-error", "🚀 通知serverB 下载包解压部署", error);
    }
}