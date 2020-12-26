const {
    spawn
} = require('child_process');

module.exports = (...args) => {
    return new Promise((resolve, reject) => {
        const execRes = spawn.apply(null, args)
        execRes.stdout.on('data', (data) => {
            data = data.toString();
            global.emitMsg(`${data}`);
        });

        execRes.stderr.on('data', (data) => {
            data = data.toString();
            global.emitError(`${data}`);
        });

        ["disconnect", "error", "exit", "message", "close"]
        .forEach(eventName => {
            execRes.on(eventName, (data) => {
                if ("close" === eventName) {
                    if (0 !== data) {
                        global.emitError(`子进程退出，退出码 ${data}`);
                        reject(data)
                    } else {
                        global.emitMsg(`子进程退出，退出码 ${data}`);
                        resolve(data)
                    }
                }
                if ("error" === eventName) {
                    global.emitError(`${eventName} ${data}`);
                    reject(data)
                }
                console.log(`${eventName}: ${data}`);
            });
        })
    });
}