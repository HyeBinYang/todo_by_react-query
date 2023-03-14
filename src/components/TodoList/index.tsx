import React, { useCallback, useContext, useMemo } from "react";
import TodoItem from "../TodoItem";
import useTodoListQuery from "../../utils/query/useTodoListQuery";
import "./style.css";
import Spinner from "../common/Spinner";
import { TodoContext } from "../../context/TodoContext";
import TodoEditModal from "../TodoEditModal";
import TodoAddModal from "../TodoAddModal";

const TodoList = () => {
  const context = useContext(TodoContext);
  const { data: todoList, status, error } = useTodoListQuery();

  const searchedTodoList = useMemo(() => {
    if (!context.keyword) return todoList;
    return todoList?.filter((todo) => todo.title.includes(context.keyword));
  }, [todoList, context.keyword]);

  const popupModal = useCallback(() => {
    const coupler = {
      "": null,
      edit: <TodoEditModal />,
      add: <TodoAddModal />,
    };

    return coupler[context.modal];
  }, [context.modal]);

  if (status === "loading") {
    return <Spinner />;
  }

  if (status === "error") {
    return <h1>Error: {error.message}</h1>;
  }

  return (
    <>
      <ul className="todo__list">{searchedTodoList ? searchedTodoList.map((todo) => <TodoItem key={todo.id} {...todo} />) : null}</ul>
      {popupModal()}
    </>
  );
};

export default TodoList;
