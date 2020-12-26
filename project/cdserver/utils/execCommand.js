const {
    exec
} = require('child_process');
let count = 0;

module.exports = function (command) {
    return new Promise((resolve, reject) => {
        global.emitToA("msg", `exec: ${command}`);
        exec(command, (error, stdout, stderr) => {
            console.log("🚀execcommand.js:count", count);
            if (error) {
                global.emitToA('msg-error', `exec error: ${error}`);
                reject(error)
            }
            global.emitToA("msg", `stdout: ${stdout}`);
            global.emitToA('msg-error', `stderr: ${stderr}`);
            resolve({
                stdout,
                stderr
            });
        });
    });
}