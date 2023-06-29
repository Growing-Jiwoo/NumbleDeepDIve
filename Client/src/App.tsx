import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./component/Commons/Header";
import Login from "./page/SignIn";
import SignUp from "./page/SignUp";
import Main from "./page/Main";
import NavBar from "./component/Commons/NavBar";
import ExchangedLikeList from "./page/ExchangedLikeList";
import Myinfo from "./page/Myinfo";
import Chat from "./component/Chat/Chat";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 720px;
  padding: 60px 16px 16px;
  overflow: hidden;
`;

function App(): JSX.Element {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route element={<Commons />}>
          <Route path="/main" element={<Main />} />
          <Route path="/like/list" element={<ExchangedLikeList />} />
          <Route path="/myinfo" element={<Myinfo />} />
          <Route path="/chat/:targetUserId" element={<Chat />} />
        </Route>
      </Routes>
    </Container>
  );
}

function Commons() {
  return (
    <>
      <Header />
      <Outlet />
      <NavBar />
    </>
  );
}

export default App;
