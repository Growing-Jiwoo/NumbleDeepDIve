import { useNavigate } from "react-router-dom";
import { Nav } from "./styled";

function NavBar(): JSX.Element {
  const navigate = useNavigate();

  return (
    <Nav>
      <ul>
        <li>
          <img
            src={require(`../../assets/Img/likeicon.png`)}
            alt="likeBtn"
            onClick={() => {
              navigate("/like/list");
            }}
          />
        </li>
        <li>
          <img
            src={require(`../../assets/Img/swipeicon.png`)}
            alt="swipeBtn"
            onClick={() => {
              navigate("/main");
            }}
          />
        </li>
        <li>
          <img
            src={require(`../../assets/Img/usericon.PNG`)}
            alt="myinfoBtn"
            onClick={() => {
              navigate("/myinfo");
            }}
          />
        </li>
      </ul>
    </Nav>
  );
}

export default NavBar;
