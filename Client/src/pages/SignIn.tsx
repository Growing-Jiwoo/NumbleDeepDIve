import { useEffect, useState } from "react";
import { Container, Form, Input, Button } from "../src/Components/Auth/styled";
import { useCookies } from "react-cookie";
import useAxiosWithAuth from "../src/Hooks/useAxiosWithAuth";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

interface Login {
  userId: string | number;
  password: string | number;
}

function LoginUi(): JSX.Element {
  const axiosInstance = useAxiosWithAuth();
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["jwt"]);
  const [values, setValues] = useState<Login>({
    userId: "",
    password: "",
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setError,
  } = useForm<Login>({
    criteriaMode: "all",
    mode: "onChange",
  });

  useEffect(() => {
    setValues({
      userId: watch("userId") ?? "",
      password: watch("password") ?? "",
    });
  }, [watch]);

  const onSubmit = async (values: Login) => {
    try {
      console.log(values);
      const response = await axiosInstance.post("auth/signin/", values);
      setCookie("jwt", response.data.accessToken);
      navigate("/Main");
    } catch (error: any) {
      console.log(error);
      if (error.response?.status === 400) {
        setError("userId", {
          type: "manual",
          message: "가입하지 않았거나 아이디나 비밀번호가 잘못되었습니다.",
        });
      } else {
        throw new Error("회원가입 실패");
      }
    }
  };

  return (
    <Container>
      <h1>로그인</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="아이디 (영소문자, 숫자 3~10자)"
          value={watch("userId") ?? ""}
          {...register("userId", {
            required: "아이디는 필수 입력 사항입니다.",
            pattern: {
              value: /^[a-z0-9]{3,10}$/i,
              message: "아이디는 영소문자와 숫자 3~10자리로 이루어져야 합니다.",
            },
          })}
        />
        {errors.userId && <span>{errors.userId.message}</span>}

        <Input
          type="password"
          placeholder="비밀번호 (3~10자)"
          value={watch("password") ?? ""}
          {...register("password", {
            required: "비밀번호는 필수 입력 사항입니다.",
            minLength: {
              value: 3,
              message: "비밀번호는 3자리 이상이어야 합니다.",
            },
            maxLength: {
              value: 10,
              message: "비밀번호는 10자리 이하여야 합니다.",
            },
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
        <Button
          className="login"
          disabled={!isValid}
          style={{
            backgroundColor: isValid ? "transparent" : "grey",
            color: isValid ? "rgb(25, 118, 210)" : "white",
            cursor: isValid ? "pointer" : "auto",
          }}
        >
          로그인
        </Button>

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
