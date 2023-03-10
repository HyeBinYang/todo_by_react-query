import React, { useContext } from "react";
import { TodoActionsContext } from "../../context/TodoContext";
import { Todo } from "../../types/todo";
import useDeleteTodoMutation from "../../utils/mutation/useDeleteTodoMutation";
import useUpdateTodoMutation from "../../utils/mutation/useUpdateTodoMutation";
import "./style.css";

interface TodoItemProps extends Todo {}

const TodoItem = (todo: TodoItemProps) => {
  const todoActionsContext = useContext(TodoActionsContext);
  const updateMutation = useUpdateTodoMutation();

  console.log(todoActionsContext);

  const handleToggleCheckbox = () => {
    updateMutation.mutate({ ...todo, done: !todo.done });
  };

  const handleClickUpdate = () => {
    todoActionsContext.toggleEditModal(true);
    todoActionsContext.getTodo(todo);
  };

  const deleteMutation = useDeleteTodoMutation();

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

export default React.memo(TodoItem);
