import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./Components/Commons/Header";
import LoginUi from "./Components/Login/LoginUi";
import SignUp from "./Components/Login/SignUp";
import Main from "./Components/Main/Main";
import NavBar from "./Components/Commons/NavBar";
import ExchangedLikeList from "./Components/LikeList/ExchangedLikeList";
import Myinfo from "./Components/Myinfo/Myinfo";

function App(): JSX.Element {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        maxWidth: "720px",
        padding: "60px 16px 16px",
        overflow: "hidden",
      }}
    >
      <Routes>
        <Route path="/" element={<LoginUi />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route element={<CommonLayout />}>
          <Route path="/Main" element={<Main />} />
          <Route path="/Like" element={<ExchangedLikeList />} />
          <Route path="/Myinfo" element={<Myinfo />} />
        </Route>
      </Routes>
    </div>
  );
}

const CommonLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <NavBar />
    </>
  );
};

export default App;
