import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./Components/Commons/Header";
import Login from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Main from "../pages/Main";
import NavBar from "./Components/Commons/NavBar";
import ExchangedLikeList from "../pages/ExchangedLikeList";
import Myinfo from "../pages/Myinfo";
import Chat from "./Components/Chat/Chat";

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
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route element={<CommonLayout />}>
          <Route path="/main" element={<Main />} />
          <Route path="/like/list" element={<ExchangedLikeList />} />
          <Route path="/myinfo" element={<Myinfo />} />
          <Route path="/chat/:targetUserId" element={<Chat />} />
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
