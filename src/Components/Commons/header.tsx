import { useNavigate } from "react-router-dom";
import { Header, HeaderContainer, HeaderImage, HeaderText } from "./styled";

function HeaderUi(): JSX.Element {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate(-1);
  };

  return (
    <Header>
      <HeaderImage
        src={`${process.env.PUBLIC_URL}/img/backbtn.PNG`}
        alt="Back Button"
        onClick={handleImageClick}
        hideOnMain={window.location.pathname === "/Main"}
      />
      <HeaderContainer>
        <HeaderText>안녕하세요</HeaderText>
      </HeaderContainer>
    </Header>
  );
}

export default HeaderUi;
