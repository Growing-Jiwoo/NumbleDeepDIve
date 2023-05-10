import { useEffect, useState } from "react";
import useAxiosWithAuth from "../../Hooks/useAxiosWithAuth";
import type { UserData } from "../../Interface/interface";
import { Container, ProfileBox } from "./styled";
import UserProfile from "./UserProfile";

function Main(): JSX.Element {
  const axiosInstance = useAxiosWithAuth();
  const [userList, setUserList] = useState<UserData[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosInstance.get("/member/list");
        setUserList(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <Container>
      <ProfileBox>
        {userList.length > 0 && <UserProfile userList={userList} />}
      </ProfileBox>
    </Container>
  );
}

export default Main;
