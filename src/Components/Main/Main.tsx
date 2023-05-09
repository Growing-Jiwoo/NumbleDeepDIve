import { useEffect, useState } from "react";
import useAxiosWithAuth from "../../Hooks/useAxiosWithAuth";
import { useNavigate } from "react-router-dom";
import {
  Button,
  ButtonContainer,
  Container,
  ProfileBox,
  ProfileImg,
  UserName,
} from "./styled";

function Main(): JSX.Element {
  const axiosInstance = useAxiosWithAuth();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosInstance.get("/member/list");
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [axiosInstance]);

  return (
    <Container>
      <ProfileBox>
        <ProfileImg>
          <svg width="400" height="400">
            <image
              href="https://images.mypetlife.co.kr/content/uploads/2018/12/09154907/cotton-tulear-2422612_1280.jpg"
              width="100%"
              height="100%"
            />
          </svg>
        </ProfileImg>
        <UserName>hi</UserName>
        <ButtonContainer>
          <Button id="likeBtn">좋아요</Button>
          <Button id="hateBtn">싫어요</Button>
        </ButtonContainer>
      </ProfileBox>
    </Container>
  );
}

export default Main;
