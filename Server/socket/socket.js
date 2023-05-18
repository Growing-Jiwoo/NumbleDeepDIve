const { Server } = require('socket.io');

const socket = (server) => {
    const io = new Server(server, {
        cors: {
            origin: '*'
        }
    });

    const namespaces = {};

    io.on("connection", (socket) => {
        console.log('join socket', new Date());

        socket.on('disconnect', () => {
            console.log('disconnect');
        })

        socket.on('message', (msg) => {
            socket.emit("message", msg);
        })

        // 새로운 namespace 생성
        socket.on("createNamespace", (namespace) => {
            console.log('namespace:', namespace);
            if (!namespaces[namespace]) {
                namespaces[namespace] = io.of(`/${namespace}`);

                namespaces[namespace].on("connection", (nsSocket) => {
                    console.log('join nsp:' + namespace);
                    nsSocket.join(namespace);


                    nsSocket.on("message", (message) => {
                        console.log(namespace + '> got message', message);
                        nsSocket.broadcast.to(namespace).emit("message", message);
                    });

                    nsSocket.on("disconnect", () => {
                        delete namespaces[namespace];
                    });
                });
            }
        });
    });

};

module.exports = socket;
