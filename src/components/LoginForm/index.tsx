import React from "react";
import useForm from "../../hook/useForm";
import { LoginValues } from "../../types/auth";
import axiosInstance from "../../utils/axios";
import useLoginMutation from "../../utils/mutation/useLoginMutation";
import loginValidation from "../../utils/validation/loginValidation";
import Input from "../common/Input";
import "./style.css";

const LoginForm = () => {
  const loginMutation = useLoginMutation();
  const { values, errors, handleChange, handleSubmit, isSubmitting } = useForm<LoginValues, LoginValues>({
    initialValues: { username: "", password: "" },
    onSubmit: async (values) => {
      const { username, password } = values;
      const res = await axiosInstance.get(`/users?username=${username}&password=${password}`);

      if (res.data.length) {
        loginMutation.mutate({ username, id: res.data[0].id });
      } else {
        alert("아이디 또는 비밀번호가 틀렸습니다.");
      }
    },
    validate: loginValidation,
  });

  return (
    <form className="login-form__container" noValidate onSubmit={handleSubmit}>
      <label>
        아이디
        <Input type="text" name="username" placeholder="소문자 또는 숫자(6 ~ 10자)" value={values.username} onChange={handleChange} />
        {errors?.username && <span>{errors.username}</span>}
      </label>
      <label>
        비밀번호
        <Input type="password" name="password" placeholder="알파벳 또는 숫자(8 ~ 12자)" value={values.password} onChange={handleChange} />
        {errors?.password && <span>{errors.password}</span>}
      </label>
      <button className="login-form__button" disabled={isSubmitting}>
        로그인
      </button>
    </form>
  );
};

export default LoginForm;
