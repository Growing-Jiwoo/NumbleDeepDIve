import socket from "socket.io-client";

const SOCKET_SERVER_URL = "http://localhost:3030";
let mySocket;
let myNspSocket;
let messageCallback;

export const initSocket = (namespace = "mynamespace", messageCallbackFn) => {
  disconnectSocket();
  if (!mySocket) {
    messageCallback = messageCallbackFn;
    mySocket = socket(SOCKET_SERVER_URL);

    mySocket.emit("createNamespace", namespace);

    myNspSocket = socket(`${SOCKET_SERVER_URL}/${namespace}`);

    myNspSocket.on("message", (message) => {
      console.log('message got from server', message);
      messageCallback(message);
    });

    myNspSocket.on("connect", () => {
      // Join the created namespace immediately after connecting
      myNspSocket.emit("joinNamespace", namespace);
    });
  }
}


export const disconnectSocket = () => {
  if (myNspSocket) {
    myNspSocket.disconnect();
    myNspSocket = null;
  }

  if (mySocket) {
    mySocket.disconnect();
    mySocket = null;
  }
}

export const sendMessage = (message) => {
  if (myNspSocket) {
    myNspSocket.emit("message", message);
  }
}