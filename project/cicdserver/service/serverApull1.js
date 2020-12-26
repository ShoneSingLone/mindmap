const execCommand = require("../utils/execCommand");
const spawnCommand = require("../utils/spawnCommand");
const gitCloneCommand = `git clone https://github.com/ShoneSingLone/remotedemo.git ../remotedemo`;

module.exports = async function () {
    let res;
    try {
        res = await execCommand(gitCloneCommand);
        global.emitMsg(`execCommand success ${res}`);
    } catch (e) {}

    try {
        res = await spawnCommand(`sh`, [`./shell_bat/serverApull1.sh`]);
        global.emitMsg("通知serverB 下载包解压部署");
        res = await global.axios.get("http://localhost:3001/serverB/deploy/serverB1");
    } catch (error) {
        global.emitError(error);
    }

}