const {
    spawn
} = require('child_process');

module.exports = (...args) => {
    let errorStack = [];
    return new Promise((resolve, reject) => {
        const execRes = spawn.apply(null, args)
        execRes.stdout.on('data', (data) => {
            data = data.toString();
            global.emitToA("msg", `stdout: ${data}`);
        });

        execRes.stderr.on('data', (data) => {
            data = data.toString();
            errorStack.push(data);
            console.log("🚀 ~ file: spawnCommand.js ~ line 15 ~ execRes.stderr.on ~ data", data);
            global.emitToA("msg-error", `stderr: ${data}`);
        });

        execRes.on('close', (code) => {
            global.emitToA("msg", `子进程退出，退出码 ${code}`);
            console.log("🚀 ~ file: spawnCommand.js ~ line 25 ~ execRes.on ~ errorStack", errorStack);
            if (errorStack.length > 0) reject(errorStack);
            resolve(code)
        });
    });
}