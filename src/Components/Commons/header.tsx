import { useNavigate } from "react-router-dom";
import { Header, HeaderContainer, HeaderText } from "./styled";

function Main(): JSX.Element {
  const navigate = useNavigate();

  return (
    <Header>
      <HeaderContainer>
        <img alt="backbtn" src={`${process.env.PUBLIC_URL}/img/backbtn.PNG`} />
        <HeaderText>안녕하세요</HeaderText>
      </HeaderContainer>
    </Header>
  );
}

export default Main;
