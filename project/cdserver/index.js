const Koa = require('koa');
const axios = require("axios");
var Router = require('koa-router');
const app = new Koa();
global.axios = axios;
/* 与serverA通信 */
global.emitToA = (msg) => {
    console.log(msg);
    global.axios.post("http://localhost:3000/serverA/emit", {
        serverB: msg
    });
}
var router = new Router();

router.get('/serverB/:action/:command', async (ctx, next) => {
    try {
        let res = "nothing";
        if ("deploy" === ctx.params.action) {
            if (ctx.params.command) {
                global.emitToA(`start ${ctx.params.command}`);
                require(`./service/${ctx.params.command}`)();
            }
        }
        ctx.body = {
            res
        }
    } catch (error) {
        console.error(error);
        ctx.status = 500;
        ctx.body = {
            error,
        }
    }
});

app
    .use(router.routes())
app.listen(3001);