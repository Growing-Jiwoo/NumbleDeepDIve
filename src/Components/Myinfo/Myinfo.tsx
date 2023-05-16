import { useCallback, useEffect, useState } from "react";
import useAxiosWithAuth from "../../Hooks/useAxiosWithAuth";
import {
  ButtonCotainer,
  ButtonDiv,
  Container,
  EditBtn,
  MyInfoProfile,
  MyInfoProfileImg,
  MyinfoEdit,
  NameText,
} from "./styled";
import type { MyInfoValue, UserData } from "../../Interface/interface";
import UserProfileImg from "../Commons/UserProfileImg";
import EditPopup from "./EditPopup";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function Myinfo() {
  const navigate = useNavigate();
  const axiosInstance = useAxiosWithAuth();
  const [values, setValues] = useState<MyInfoValue>({
    nickname: "",
    profileImgUrl: "",
  });
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);
  const [isEditOpen, setIsEditOpen] = useState<boolean>(false);
  const openEditModal = () => setIsEditOpen(true);
  const closeEditModal = () => setIsEditOpen(false);

  async function fetchData() {
    try {
      const response = await axiosInstance.get<UserData>("/auth/user");
      setValues({
        nickname: response.data.nickname,
        profileImgUrl: response.data.profileImgUrl,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function handleLogout() {
    removeCookie("jwt");
    navigate("/");
  }

  const onSearch = useCallback(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <MyInfoProfile>
        <MyInfoProfileImg>
          <UserProfileImg profileImgUrl={values.profileImgUrl} />
        </MyInfoProfileImg>
        <MyinfoEdit>
          <NameText>{values.nickname}</NameText>
          <EditBtn onClick={openEditModal}>
            <img
              src={`${process.env.PUBLIC_URL}/img/editicon.png`}
              alt="editBtn"
            />
          </EditBtn>
        </MyinfoEdit>
      </MyInfoProfile>
      <ButtonCotainer>
        <ButtonDiv
          onClick={() => {
            navigate("/like/list?type=send");
          }}
        >
          내가 좋아한 사람
        </ButtonDiv>
        <ButtonDiv
          onClick={() => {
            navigate("/like/list?type=receive");
          }}
        >
          나를 좋아한 사람
        </ButtonDiv>
        <ButtonDiv
          onClick={() => {
            handleLogout();
          }}
        >
          로그아웃
        </ButtonDiv>
      </ButtonCotainer>

      {isEditOpen && (
        <EditPopup
          isOpen={isEditOpen}
          closeModal={closeEditModal}
          nickname={values.nickname}
          onSearch={onSearch}
        />
      )}
    </Container>
  );
}
