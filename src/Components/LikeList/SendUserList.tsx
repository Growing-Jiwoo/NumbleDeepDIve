import { useEffect, useState } from "react";
import { LikeListContainer, LikeListDiv } from "./styled";
import { ProfileImg } from "../Commons/styled";
import useAxiosWithAuth from "../../Hooks/useAxiosWithAuth";
import UserProfileImg from "../Commons/UserProfileImg";
import type { UserData } from "../../Interface/interface";

interface SendUserListProps {
  userList: UserData[];
}

function SendUserList({ userList }: SendUserListProps): JSX.Element {
  const axiosInstance = useAxiosWithAuth();
  const [likeSendUserList, setLikeSendUserList] = useState<UserData[]>([]);

  useEffect(() => {
    setLikeSendUserList(userList);
  }, [userList]);

  async function handleButtonClick(targetUserId: string) {
    try {
      await axiosInstance.patch("/affinity/dislike", {
        targetUserId,
      });

      setLikeSendUserList((prevUserList) =>
        prevUserList.filter((user) => user.userId !== targetUserId)
      );
    } catch (error) {
      console.log(error);
    }
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
            <button onClick={() => handleButtonClick(user.userId)}>취소</button>
          </LikeListDiv>
        ))}
      </LikeListContainer>
    </div>
  );
}

export default SendUserList;
