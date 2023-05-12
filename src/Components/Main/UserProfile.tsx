import useAxiosWithAuth from "../../Hooks/useAxiosWithAuth";
import type { UserListArray } from "../../Interface/interface";
import UserProfileImg from "../Commons/UserProfileImg";
import { Button, ButtonContainer, UserName } from "./styled";
import { ProfileImg } from "../Commons/styled";

export default function UserProfile({ userList, onSearch }: UserListArray) {
  const axiosInstance = useAxiosWithAuth();

  async function handleButtonClick(action: string) {
    try {
      const targetUser = userList[0];
      const response = await axiosInstance.patch(`/affinity/${action}`, {
        targetUserId: targetUser.userId,
      });
      console.log(
        `${targetUser.userId} 유저에게 ${action} 버튼 클릭 결과: ${response.data}`
      );
      onSearch();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <ProfileImg className="userProfile">
        <UserProfileImg profileImgUrl={userList[0].profileImgUrl} />
      </ProfileImg>
      <UserName>{userList[0].nickname}</UserName>
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
