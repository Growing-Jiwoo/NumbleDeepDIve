import React, { useEffect, useState, ChangeEvent } from "react";
import { initSocket, disconnectSocket, sendMessage } from "./socket";
import { ChatContainer, InputContainer, MessageItem } from "./styled";
import { useParams } from "react-router-dom";

interface Message {
  sender: "You" | "Received";
  message: string;
}

function Chat(): JSX.Element {
  const [myMessage, setMyMessage] = useState<string>("");
  const [myMessageList, setMyMessageList] = useState<Message[]>([]);
  const { targetUserId } = useParams<{ targetUserId: string }>();

  useEffect(() => {
    const namespace: string | undefined = targetUserId;
    initSocket(namespace, handleReceivedMessage);
    return () => {
      disconnectSocket();
    };
  }, [targetUserId]);

  const handleMyMessage = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setMyMessage(value);
  };

  const sendMyMessage = () => {
    sendMessage(myMessage);
    setMyMessageList((prevList: Message[]) => [
      ...prevList,
      { sender: "You", message: myMessage },
    ]);
    setMyMessage("");
  };

  const handleReceivedMessage = (message: string) => {
    setMyMessageList((prevList: Message[]) => [
      ...prevList,
      { sender: "Received", message: message },
    ]);
  };

  return (
    <ChatContainer>
      <button id="disconnect" onClick={disconnectSocket}>
        연결 끊기
      </button>
      <br />
      <InputContainer>
        <input onChange={handleMyMessage} value={myMessage} />
        <button id="send" onClick={sendMyMessage}>
          전송
        </button>
      </InputContainer>
      <br />
      <ul>
        {myMessageList.map((message: Message, idx: number) => (
          <MessageItem key={idx} sender={message.sender}>
            {message.sender === "You" ? (
              <span>You: </span>
            ) : (
              <span>Received: </span>
            )}
            {message.message}
          </MessageItem>
        ))}
      </ul>
    </ChatContainer>
  );
}

export default Chat;
