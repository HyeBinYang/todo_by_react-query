import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/todo");
    }
  }, []);

  return <LoginForm />;
};

export default Login;
