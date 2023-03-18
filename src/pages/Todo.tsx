import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";
import TodoAddButton from "../components/TodoAddButton";
import TodoLayout from "../components/TodoLayout";
import TodoList from "../components/TodoList";
import TodoSearch from "../components/TodoSearch";

const Todo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    }
  }, []);

  if (!localStorage.getItem("user")) return null;

  return (
    <>
      <LogoutButton />
      <TodoLayout>
        <TodoSearch />
        <TodoList />
      </TodoLayout>
      <TodoAddButton />
    </>
  );
};

export default Todo;
