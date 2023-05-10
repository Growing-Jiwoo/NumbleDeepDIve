import { useState } from "react";
import useAxiosWithAuth from "../../Hooks/useAxiosWithAuth";
import type { UserListArray } from "../../Interface/interface";
import { Button, ButtonContainer, UserName } from "./styled";
import UserProfileImg from "./UserProfileImg";

export default function UserProfile({ userList }: UserListArray) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const axiosInstance = useAxiosWithAuth();

  async function handleButtonClick(action: string) {
    try {
      const targetUser = userList[currentIndex];
      const response = await axiosInstance.patch(`/affinity/${action}`, {
        targetUserId: targetUser.userId,
      });
      console.log(
        `${targetUser.userId} 유저에게 ${action} 버튼 클릭 결과 :${response.data}`
      );

      setCurrentIndex((prevIndex) => {
        if (prevIndex === userList.length - 1) {
          return 0;
        } else {
          return prevIndex + 1;
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <UserProfileImg profileImgUrl={userList[currentIndex].profileImgUrl} />

      <UserName>{userList[currentIndex].nickname}</UserName>
      <ButtonContainer>
        <Button id="likeBtn" onClick={() => handleButtonClick("like")}>
          좋아요
        </Button>
        <Button id="hateBtn" onClick={() => handleButtonClick("dislike")}>
          싫어요
        </Button>
      </ButtonContainer>
    </>
  );
}
