import { LikeListContainer, LikeListDiv } from "./styled";
import { ProfileImg } from "../Commons/styled";
import { UserData } from "../../@types/interface";
import { useState } from "react";
import UserProfileImg from "../Commons/UserProfileImg";
import { useNavigate } from "react-router-dom";
import { generateRandomString } from "../../util/generateRandomString";

interface SendUserListProps {
  userList: UserData[];
}

function ReceiveUserList({ userList }: SendUserListProps): JSX.Element {
  const [likeSendUserList] = useState<UserData[]>(userList);
  const navigate = useNavigate();

  function handleButtonClick() {
    const randomValue = generateRandomString();
    navigate(`/chat/${randomValue}`);
    window.open(`/chat/${randomValue}`, "_blank");
    setTimeout(() => {
      window.location.reload();
    }, 100);
  }

  return (
    <div>
      <LikeListContainer>
        {likeSendUserList.map((user: UserData) => (
          <LikeListDiv key={user.userId}>
            <ProfileImg className="sendUserProfile">
              <UserProfileImg profileImgUrl={user.profileImgUrl} />
            </ProfileImg>
            <p>{user.nickname}</p>
            <button
              onClick={() => {
                handleButtonClick();
              }}
            >
              채팅
            </button>
          </LikeListDiv>
        ))}
      </LikeListContainer>
    </div>
  );
}

export default ReceiveUserList;
