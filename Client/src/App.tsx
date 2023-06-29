import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./component/Commons/Header";
import Login from "./page/SignIn";
import SignUp from "./page/SignUp";
import Main from "./page/Main";
import NavBar from "./component/Commons/NavBar";
import ExchangedLikeList from "./page/ExchangedLikeList";
import Myinfo from "./page/Myinfo";
import Chat from "./component/Chat/Chat";

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
