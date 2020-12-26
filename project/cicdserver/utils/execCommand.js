const {
    exec
} = require('child_process');
let count = 0;

module.exports = function (command) {
    return new Promise((resolve, reject) => {
        global.emitMsg(`exec: ${command}`);
        exec(command, (error, stdout, stderr) => {
            if (error) {
                global.emitError(error);
                reject(error)
            } else {
                global.emitMsg({
                    stdout,
                    stderr
                });
                resolve({
                    stdout,
                    stderr
                });
            }
        });
    });
}