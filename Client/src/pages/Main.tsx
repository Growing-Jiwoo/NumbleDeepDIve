import { useCallback, useEffect, useState } from "react";
import useAxiosWithAuth from "../src/Hooks/useAxiosWithAuth";
import type { UserData } from "../src/Interface/interface";
import {
  CenteredContainer,
  Container,
  MessageContainer,
  ProfileBox,
} from "../src/Components/Main/styled";
import UserProfile from "../src/Components/Main/UserProfile";

function Main(): JSX.Element {
  const axiosInstance = useAxiosWithAuth();
  const [userList, setUserList] = useState<UserData[]>([]);

  async function fetchData() {
    try {
      const response = await axiosInstance.get("/member/list");
      setUserList(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const onSearch = useCallback(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <ProfileBox>
        {userList.length > 0 ? (
          <>
            <UserProfile userList={userList} onSearch={onSearch} />
          </>
        ) : (
          <CenteredContainer>
            <MessageContainer>
              <h6>
                모든 유저를 둘러봤습니다. <br /> like 탭에 가보세요
              </h6>
            </MessageContainer>
          </CenteredContainer>
        )}
      </ProfileBox>
    </Container>
  );
}

export default Main;
