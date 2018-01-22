
function setSocketIo(httpServer) {
    var io = require('socket.io')(httpServer), users = {};

    io.on('connection', function (socket) {
        /*当前登录用户*/
        var username = null, makeSocketEvent;

        makeSocketEvent = function (eventName, callBack) {
            socket.on(eventName, function (data) {
                console.log(username + ": " + eventName + " \n ");
                callBack(data);
            });
        }

        makeSocketEvent('login', function (data) {
            if ((data && data.username) && (username = data.username) && (!users[username])) {
                users[username] = username;
                return (function () {
                    io.sockets.emit('loginSuccess', data);
                    io.sockets.emit('add', data);
                })()
            } else {
                return socket.emit('loginFail', '')
            }
        });

        makeSocketEvent('sendMessage', function (data) {
            console.dir(data);
            io.sockets.emit('receiveMessage', data);
        })

        /*退出登录*/
        makeSocketEvent('disconnect', function () {
            /*向所有连接的客户端广播leave事件*/
            io.sockets.emit('leave', username);
            if (username && users[username]) {
                users[username] = null;
            }
        });

    });
    return httpServer;
}


module.exports = { setSocketIo }
