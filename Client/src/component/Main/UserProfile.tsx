import useAxiosWithAuth from "../../hook/useAxiosWithAuth";
import type { UserListArray } from "../../@types/interface";
import UserProfileImg from "../Commons/UserProfileImg";
import { Button, ButtonContainer, UserName } from "./styled";
import { ProfileImg } from "../Commons/styled";

export default function UserProfile({ userList, onSearch }: UserListArray) {
  const axiosInstance = useAxiosWithAuth();
  const { userId: targetUserId, nickname, profileImgUrl } = userList[0];

  async function handleButtonClick(action: string) {
    try {
      await axiosInstance.patch(`/affinity/${action}`, { targetUserId });
      onSearch();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <ProfileImg className="userProfile">
        <UserProfileImg profileImgUrl={profileImgUrl} />
      </ProfileImg>
      <UserName>{nickname}</UserName>
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
