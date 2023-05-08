import { useEffect, useState } from "react";
import { Container, Form, Input, Button } from "./styled";
import { useCookies } from "react-cookie";
import useAxiosWithAuth from "../../Hooks/useAxiosWithAuth";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

interface SingUp {
  userId: string | number;
  nickname: string | number;
  password: string | number;
}

function SignUp(): JSX.Element {
  const axiosInstance = useAxiosWithAuth();
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["jwt"]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SingUp>({
    criteriaMode: "all",
    mode: "onChange",
  });
  const [values, setValues] = useState<SingUp>({
    userId: "",
    password: "",
    nickname: "",
  });

  useEffect(() => {
    setValues({
      userId: watch("userId") ?? "",
      nickname: watch("nickname") ?? "",
      password: watch("password") ?? "",
    });
  }, [watch]);

  const onSubmit = async (values: SingUp) => {
    try {
      console.log(values);
      const response = await axiosInstance.post("auth/signup", values);
      setCookie("jwt", response.data.token);
      console.log(response);
      // navigate("/home");
    } catch (error) {
      throw new Error("회원가입 실패");
    }
  };

  return (
    <Container>
      <h1>회원가입</h1>
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
        <Input
          type="text"
          placeholder="닉네임 (숫자와 문자 3~10자)"
          value={watch("nickname") ?? ""}
          {...register("nickname", {
            required: "닉네임은 필수 입력 사항입니다.",
            pattern: {
              value: /^[a-z0-9가-힣]{3,10}$/i,
              message: "닉네임은 숫자와 문자 3~10자리로 이루어져야 합니다.",
            },
          })}
        />
        {errors.nickname && <span>{errors.nickname.message}</span>}
        <Button className="signup" type="submit">
          회원가입 완료
        </Button>
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          로그인 화면으로 가기
        </Button>
      </Form>
    </Container>
  );
}

export default SignUp;
