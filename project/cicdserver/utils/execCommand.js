const {
    exec
} = require('child_process');
let count = 0;

module.exports = function (command) {
    return new Promise((resolve, reject) => {
        global.IO.emit("msg", `exec: ${command}`);
        exec(command, (error, stdout, stderr) => {
            console.log("🚀execcommand.js:count", count);
            if (error) {
                global.IO.emit('msg-error', `exec error: ${error}`);
                reject(error)
            }
            global.IO.emit("msg", `stdout: ${stdout}`);
            global.IO.emit('msg-error', `stderr: ${stderr}`);
            resolve({
                stdout,
                stderr
            });
        });
    });
}