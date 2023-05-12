import { useState, useEffect } from "react";
import useAxiosWithAuth from "../../Hooks/useAxiosWithAuth";
import {
  LikeTabMenu,
  ReceiveBtn,
  SendBtn,
  Container,
  LikeListContainer,
} from "./styled";
import SendUserList from "./SendUserList";
import { UserData } from "../../Interface/interface";

function ExchangedLikeList(): JSX.Element {
  const axiosInstance = useAxiosWithAuth();
  const [likeSendUserList, setLikeSendUserList] = useState<UserData[]>();
  const [receiveUserList, setReceiveUserList] = useState<UserData[]>();
  const [isSendClicked, setIsSendClicked] = useState(false);
  const [isReceiveClicked, setIsReceiveClicked] = useState(false);
  const [activeTab, setActiveTab] = useState<"send" | "receive">("send");

  const handleSendButtonClick = () => {
    setIsSendClicked(true);
    setIsReceiveClicked(false);
  };

  const handleReceiveButtonClick = () => {
    setIsSendClicked(false);
    setIsReceiveClicked(true);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosInstance.get("/affinity/list");
        console.log(response);
        setLikeSendUserList(response.data.send);
        setReceiveUserList(response.data.receieve);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  console.log(receiveUserList);
  return (
    <Container>
      <LikeTabMenu>
        <SendBtn
          active={activeTab === "send"}
          onClick={() => {
            setActiveTab("send");
            handleSendButtonClick();
          }}
        >
          Send
        </SendBtn>
        <ReceiveBtn
          active={activeTab === "receive"}
          onClick={() => {
            setActiveTab("receive");
            handleReceiveButtonClick();
          }}
        >
          Receive
        </ReceiveBtn>
      </LikeTabMenu>
      <LikeListContainer>
        {isSendClicked || (!isSendClicked && !isReceiveClicked) ? (
          <div>
            {likeSendUserList && likeSendUserList.length > 0 && (
              <SendUserList userList={likeSendUserList} />
            )}
          </div>
        ) : null}
        {isReceiveClicked ? <div>구현 진행 중</div> : null}
      </LikeListContainer>
    </Container>
  );
}

export default ExchangedLikeList;
