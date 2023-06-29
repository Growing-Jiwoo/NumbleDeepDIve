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
        src={require(`../../assets/Img/backbtn.PNG`)}
        alt="Back Button"
        onClick={handleImageClick}
        hideOnMain={window.location.pathname === "/Main"}
      />
      <HeaderContainer>
        <HeaderText>NUMMANDA</HeaderText>
      </HeaderContainer>
    </Header>
  );
}

export default HeaderUi;
