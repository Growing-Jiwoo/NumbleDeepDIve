import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./Components/Commons/header";
import LoginUi from "./Components/Login/LoginUi";
import SignUp from "./Components/Login/SignUp";
import Main from "./Components/Main/Main";

function App(): JSX.Element {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        maxWidth: "720px",
      }}
    >
      <div>
        <Routes>
          <Route path="/" element={<LoginUi />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route element={<CommonLayout />}>
            <Route path="/Main" element={<Main />} />
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
    </>
  );
};

export default App;
