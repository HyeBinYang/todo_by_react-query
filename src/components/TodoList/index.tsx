import React, { lazy, Suspense, useCallback, useContext, useMemo } from "react";
import TodoItem from "../TodoItem";
import useTodoListQuery from "../../utils/query/useTodoListQuery";
import "./style.css";
import Spinner from "../common/Spinner";
import { TodoContext } from "../../context/TodoContext";
import TodoFilter from "../TodoFilter";

const TodoAddModal = import("../TodoAddModal");
const TodoEditModal = import("../TodoEditModal");

const TodoList = () => {
  const PreloadTodoAddModal = lazy(() => TodoAddModal);
  const PreloadTodoEditModal = lazy(() => TodoEditModal);
  const context = useContext(TodoContext);
  const { data: todoList, status, error } = useTodoListQuery();

  const searchedTodoList = useMemo(() => {
    if (context.done === null) {
      if (!context.keyword) return todoList;
      return todoList?.filter((todo) => todo.title.includes(context.keyword));
    } else {
      return todoList?.filter((todo) => todo.title.includes(context.keyword) && todo.done === context.done);
    }
  }, [todoList, context.keyword, context.done]);

  const popupModal = useCallback(() => {
    const coupler = {
      "": null,
      edit: <PreloadTodoEditModal />,
      add: <PreloadTodoAddModal />,
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
      <TodoFilter />
      <ul className="todo__list">{searchedTodoList ? searchedTodoList.map((todo) => <TodoItem key={todo.id} {...todo} />) : null}</ul>
      <Suspense fallback={null}>{popupModal()}</Suspense>
    </>
  );
};

export default TodoList;
