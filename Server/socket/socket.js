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
            const namespace = Object.keys(socket.rooms)[0];
            if (namespaces[namespace]) {
                delete namespaces[namespace];
            }
        });

        socket.on('message', (msg) => {
            const namespace = Object.keys(socket.rooms)[0];
            console.log(namespace + '> got message', msg);
            if (namespace === '/') {
                io.to(namespace).emit("message", msg);
            } else {
                io.of(namespace).to(namespace).emit("message", msg);
            }
        });

        socket.on("createNamespace", (namespace) => {
            console.log('namespace:', namespace);
            if (!namespaces[namespace]) {
                namespaces[namespace] = true;
                io.of(`/${namespace}`).on("connection", (nsSocket) => {
                    console.log('join nsp:' + namespace);
                    nsSocket.join(namespace);
                    nsSocket.emit("message", "namespace에 성공적으로 입장 완료");
                    nsSocket.on("message", (message) => {
                        const nsNamespace = Object.keys(nsSocket.rooms)[0];
                        console.log(nsNamespace + '> got message', message);
                        nsSocket.broadcast.to(nsNamespace).emit("message", message);
                    });
                    nsSocket.on("disconnect", () => {

                        const nsNamespace = Object.keys(nsSocket.rooms)[0];
                        delete namespaces[nsNamespace];
                    });
                });
            } else {
                socket.join(namespace);
                socket.emit("message", "namespace에 성공적으로 입장 완료");
            }
        });
    });
};

module.exports = socket;
