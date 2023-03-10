import React from "react";
import TodoItem from "../TodoItem";
import useTodoListQuery from "../../utils/query/useTodoListQuery";
import "./style.css";

const TodoList = () => {
  const { data: todoList, status, error } = useTodoListQuery();

  if (status === "loading") {
    return <h1>Loading...</h1>;
  }

  if (status === "error") {
    return <h1>Error: {error.message}</h1>;
  }

  return <ul className="todo__list">{todoList ? todoList.map((todo) => <TodoItem key={todo.id} {...todo} />) : null}</ul>;
};

export default TodoList;
