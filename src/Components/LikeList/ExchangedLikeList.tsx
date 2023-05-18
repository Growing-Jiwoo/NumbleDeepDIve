import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
import ReceiveUserList from "./ReceiveUserList";

function ExchangedLikeList(): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();
  const axiosInstance = useAxiosWithAuth();

  const [likeSendUserList, setLikeSendUserList] = useState<UserData[]>([]);
  const [receiveUserList, setReceiveUserList] = useState<UserData[]>([]);
  const [isSendClicked, setIsSendClicked] = useState(false);
  const [isReceiveClicked, setIsReceiveClicked] = useState(false);
  const [activeTab, setActiveTab] = useState<"send" | "receive">();

  const handleSendButtonClick = () => {
    setIsSendClicked(true);
    setIsReceiveClicked(false);
    navigate("/like/list?type=send");
  };

  const handleReceiveButtonClick = () => {
    setIsSendClicked(false);
    setIsReceiveClicked(true);
    navigate("/like/list?type=receive");
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

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const typeParam = searchParams.get("type");
    if (typeParam === "send" || !typeParam) {
      setActiveTab("send");
      setIsSendClicked(true);
      setIsReceiveClicked(false);
    } else if (typeParam === "receive") {
      setActiveTab("receive");
      setIsSendClicked(false);
      setIsReceiveClicked(true);
    }
  }, [location.search]);

  return (
    <Container>
      <LikeTabMenu>
        <SendBtn
          id="sendBtn"
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
        {isReceiveClicked ? (
          <div>
            {receiveUserList && receiveUserList.length > 0 && (
              <ReceiveUserList userList={receiveUserList} />
            )}
          </div>
        ) : null}
      </LikeListContainer>
    </Container>
  );
}

export default ExchangedLikeList;
