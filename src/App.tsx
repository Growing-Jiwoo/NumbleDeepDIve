import { Routes, Route } from "react-router-dom";
import LoginUi from "./Components/Login/LoginUi";
import SignUp from "./Components/Login/SignUp";

function App(): JSX.Element {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        padding: "60px 16px 16px",
        maxWidth: "720px",
      }}
    >
      <div>
        <Routes>
          <Route path="/" element={<LoginUi />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
