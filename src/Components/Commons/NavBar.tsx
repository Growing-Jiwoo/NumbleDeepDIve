import { useNavigate } from "react-router-dom";
import { Nav } from "./styled";

function NavBar(): JSX.Element {
  const navigate = useNavigate();

  return (
    <Nav>
      <ul>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/img/likeicon.png`}
            alt="likeBtn"
            onClick={() => {
              navigate("/Like");
            }}
          />
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/img/swipeicon.png`}
            alt="swipeBtn"
            onClick={() => {
              navigate("/Main");
            }}
          />
        </li>
        <li>
          <img
            src={`${process.env.PUBLIC_URL}/img/usericon.PNG`}
            alt="myinfoBtn"
            onClick={() => {
              navigate("/Main");
            }}
          />
        </li>
      </ul>
    </Nav>
  );
}

export default NavBar;
