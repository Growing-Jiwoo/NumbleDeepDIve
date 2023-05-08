import { useState } from "react";
import { Container, Form, Input, Button, LogoImage } from "./styled";
import { useCookies } from "react-cookie";
import useAxiosWithAuth from "../../Hooks/useAxiosWithAuth";
import { useNavigate } from "react-router-dom";

function LoginUi(): JSX.Element {
  const axiosInstance = useAxiosWithAuth();
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["jwt"]);
  const [values, setValues] = useState({
    userId: "",
    password: "",
  });

  const handleChange = (e: any) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("users/login/", values);
      setCookie("jwt", response.data.token);
      // navigate("/home");
    } catch (error) {
      throw "로그인 실패";
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="아이디 (영소문자, 숫자 3~10자)"
          name="userId"
          // value={values.userId}
          // onChange={handleChange}
        />
        <Input
          type="password"
          placeholder="비밀번호 (3~10자)"
          name="password"
          // value={values.password}
          // onChange={handleChange}
        />
        <Button className="login">로그인</Button>
        <Button
          className="signup"
          onClick={() => {
            navigate("/SignUp");
          }}
        >
          회원가입
        </Button>
      </Form>
    </Container>
  );
}

export default LoginUi;
