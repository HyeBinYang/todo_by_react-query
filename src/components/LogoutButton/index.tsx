import React from "react";
import { User } from "../../types/auth";
import useDeleteSessionMutation from "../../utils/mutation/useDeleteSessionMutation";
import "./style.css";

const LogoutButton = () => {
  const deleteSessionMutation = useDeleteSessionMutation();

  const handleClickLogout = () => {
    const { id } = JSON.parse(localStorage.getItem("user") as string) as User;
    if (id) deleteSessionMutation.mutate(id);
  };

  return (
    <button className="logout__button" onClick={handleClickLogout}>
      로그아웃
    </button>
  );
};

export default LogoutButton;
