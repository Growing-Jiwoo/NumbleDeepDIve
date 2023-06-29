import styled from "styled-components";

interface MessageItemProps {
  sender: string;
}

export const ChatContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding-bottom: 120px;
  ul {
    width: 100%;
    height: 90%;
    overflow-y: auto;
    list-style-type: none;
    padding-top: 7px;
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    background-color: darkgray;
    color: #ffffff;
    cursor: pointer;
    font-weight: bold;
  }

  input {
    width: 70%;
    height: 40px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 10px;

  input {
    flex: 1;
    height: 40px;
    padding-left: 10px;
  }
`;

export const MessageItem = styled.li<MessageItemProps>`
  text-align: ${({ sender }) => (sender === "You" ? "right" : "left")};
  background-color: ${({ sender }) =>
    sender === "You" ? "#e6f2ff" : "#f2f2f2"};
  padding: 8px;
  border-radius: 4px;
  margin-bottom: 4px;
  word-wrap: break-word;
  span {
    fontweight: "bold";
  }
`;
