import React, { FC } from "react";
import "./style.css";

interface TodoLayoutProps {
  children: React.ReactNode;
}

const TodoLayout: FC<TodoLayoutProps> = ({ children }) => {
  return <div className="todo__container">{children}</div>;
};

export default TodoLayout;
