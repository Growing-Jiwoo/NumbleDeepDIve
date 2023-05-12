import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./Components/Commons/Header";
import LoginUi from "./Components/Login/LoginUi";
import SignUp from "./Components/Login/SignUp";
import Main from "./Components/Main/Main";
import NavBar from "./Components/Commons/NavBar";
import ExchangedLikeList from "./Components/LikeList/ExchangedLikeList";

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
      <div>
        <Routes>
          <Route path="/" element={<LoginUi />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route element={<CommonLayout />}>
            <Route path="/Main" element={<Main />} />
            <Route path="/Like" element={<ExchangedLikeList />} />
          </Route>
        </Routes>
      </div>
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
