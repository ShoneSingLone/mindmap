const Koa = require('koa');
const axios = require("axios");
var staticServe = require('koa-static-server');
var Router = require('koa-router');
const app = new Koa();
const server = require("http").createServer(app.callback());
const IO = require("socket.io")(server);

IO.on('connection', socket => {
    console.log("🚀 connection");
    socket.on('disconnect', () => {
        console.error('disconnected')
    })
})

global.IO = IO;
global.axios = axios;

var router = new Router();

router.get('/serverA/:action/:command', async (ctx, next) => {
    try {
        let res = "nothing";
        if ("pull" === ctx.params.action) {
            if (ctx.params.command) {
                IO.emit("msg", ctx.params.command);
                const fn = require(`./service/${ctx.params.command}`);
                fn();
                IO.emit("msg", "done");
            }
        }
        ctx.body = {
            res
        }
    } catch (error) {
        ctx.status = 500;
        ctx.body = {
            error,
        }
    }
});

app
    .use(router.routes())
    .use(staticServe({
        rootDir: "statics",
    }));

server.listen(3000);