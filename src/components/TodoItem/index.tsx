import React, { useContext } from "react";
import { useMutation, useQueryClient } from "react-query";
import { TodoActionsContext, TodoContext } from "../../context/TodoContext";
import { Todo } from "../../types/todo";
import axiosInstance from "../../utils/axios";
import useUpdateTodoMutation from "../../utils/mutation/useUpdateTodoMutation";
import "./style.css";

interface TodoItemProps extends Todo {}

const deleteTodo = async (todoId: number) => {
  axiosInstance.delete(`/todos/${todoId}`);
};

const TodoItem = (todo: TodoItemProps) => {
  const todoActionsContext = useContext(TodoActionsContext);
  const queryClient = useQueryClient();
  const updateMutation = useUpdateTodoMutation();

  const handleToggleCheckbox = () => {
    updateMutation.mutate({ ...todo, done: !todo.done });
  };

  const handleClickUpdate = () => {
    todoActionsContext.toggleEditModal(true);
    todoActionsContext.getTodo(todo);
  };

  const deleteMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.setQueryData<Todo[]>("todoList", (oldData) => {
        if (!oldData) return [];

        return oldData?.filter((data) => data.id !== todo.id);
      });
    },
    onError: (error) => {
      console.error(error);
      alert("에러가 발생 했습니다. 다시 한번 시도해주세요.");
    },
  });

  const handleClickDelete = () => {
    if (todo.id) deleteMutation.mutate(todo.id);
  };

  return (
    <li className={todo.done ? "todo__item done" : "todo__item"}>
      <input
        id={`checkbox_${todo.id}`}
        className="item__input--checkbox"
        type="checkbox"
        checked={todo.done}
        onChange={handleToggleCheckbox}
      />
      <label htmlFor={`checkbox_${todo.id}`}></label>
      {todo.done ? <del className="item__title">{todo.title}</del> : <p className="item__title">{todo.title}</p>}
      <div className="item__button-container">
        <button className="item__button" onClick={handleClickUpdate}>
          수정
        </button>
        <button className="item__button" onClick={handleClickDelete}>
          삭제
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
