import React, { useContext } from "react";
import TodoItem from "../TodoItem";
import useTodoListQuery from "../../utils/query/useTodoListQuery";
import "./style.css";
import Spinner from "../common/Spinner";
import { TodoContext } from "../../context/TodoContext";
import TodoEditModal from "../TodoEditModal";

const TodoList = () => {
  const { data: todoList, status, error } = useTodoListQuery();
  const context = useContext(TodoContext);

  if (status === "loading") {
    return <Spinner />;
  }

  if (status === "error") {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <>
      <ul className="todo__list">{todoList ? todoList.map((todo) => <TodoItem key={todo.id} {...todo} />) : null}</ul>
      {context.editModal && <TodoEditModal />}
    </>
  );
};

export default TodoList;
