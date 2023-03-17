import React from "react";
import Input from "../common/Input";
import "./style.css";

const LoginForm = () => {
  return (
    <form className="login-form__container">
      <label>
        아이디
        <Input type="text" />
      </label>
      <label>
        비밀번호
        <Input type="password" />
      </label>
      <button className="login-form__button">로그인</button>
    </form>
  );
};

export default LoginForm;
