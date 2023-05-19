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
import type { UserData } from "../../Interface/interface";
import ReceiveUserList from "./ReceiveUserList";

function ExchangedLikeList(): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();
  const axiosInstance = useAxiosWithAuth();

  const [likeSendUserList, setLikeSendUserList] = useState<UserData[]>([]);
  const [receiveUserList, setReceiveUserList] = useState<UserData[]>([]);
  const [activeTab, setActiveTab] = useState<"send" | "receive">("send");

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get("/affinity/list");
      setLikeSendUserList(response.data.send);
      setReceiveUserList(response.data.receieve);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTabClick = (tab: "send" | "receive") => {
    setActiveTab(tab);
    navigate(`/like/list?type=${tab}`);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setActiveTab(searchParams.get("type") === "receive" ? "receive" : "send");
  }, [location.search]);

  return (
    <Container>
      <LikeTabMenu>
        <SendBtn
          id="sendBtn"
          active={activeTab === "send"}
          onClick={() => handleTabClick("send")}
        >
          Send
        </SendBtn>
        <ReceiveBtn
          active={activeTab === "receive"}
          onClick={() => handleTabClick("receive")}
        >
          Receive
        </ReceiveBtn>
      </LikeTabMenu>
      <LikeListContainer>
        {(activeTab === "send" ||
          (!likeSendUserList.length && !receiveUserList.length)) && (
          <div>
            {likeSendUserList.length > 0 && (
              <SendUserList userList={likeSendUserList} />
            )}
          </div>
        )}
        {activeTab === "receive" && (
          <div>
            {receiveUserList.length > 0 && (
              <ReceiveUserList userList={receiveUserList} />
            )}
          </div>
        )}
      </LikeListContainer>
    </Container>
  );
}

export default ExchangedLikeList;
