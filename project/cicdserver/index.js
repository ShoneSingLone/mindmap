const Koa = require('koa');
const axios = require("axios");
var staticServe = require('koa-static-server');
const bodyParser = require('koa-bodyparser')
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

global.emitMsg = data => {
    console.log("msg: ", data);
    IO.emit("msg", {
        serverA: data
    })
};
global.emitError = data => {
    console.log("error: ", data);
    IO.emit("msg-error", {
        serverA: data
    })
};
global.axios = axios;

var router = new Router();

router.get('/serverA/:action/:command', async (ctx, next) => {
    try {
        let res = "nothing";
        if ("pull" === ctx.params.action) {
            if (ctx.params.command) {
                global.emitMsg(`start ${ctx.params.command}`);
                require(`./service/${ctx.params.command}`)();
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
    console.log('router.get');
    next();
});

router.post('/serverA/emit', async (ctx, next) => {
    try {
        IO.emit("msg", ctx.request.body)
        ctx.body = {
            msg: "done"
        }
    } catch (error) {
        ctx.status = 500;
        ctx.body = {
            error,
        }
    }
    console.log('router.post');
    next();
});

app.use(bodyParser())
    .use(router.routes())
    .use(staticServe({
        rootDir: "statics",
    }));

server.listen(3000);