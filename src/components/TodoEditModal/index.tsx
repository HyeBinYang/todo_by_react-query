import React, { useContext, useEffect, useRef } from "react";
import { TodoActionsContext, TodoContext } from "../../context/TodoContext";
import useUpdateTodoMutation from "../../utils/mutation/useUpdateTodoMutation";
import "./style.css";

const TodoEditModal = () => {
  const todoContext = useContext(TodoContext);
  const todoActionsContext = useContext(TodoActionsContext);
  const inputEl = useRef<HTMLInputElement>(null);

  const updateTodoMutation = useUpdateTodoMutation();

  const handleClickCancel = () => {
    todoActionsContext.toggleEditModal(false);
  };

  const handleClickUpdate = () => {
    if (inputEl.current) {
      updateTodoMutation.mutate(
        { ...todoContext.todo, title: inputEl.current.value },
        {
          onSuccess: () => {
            todoActionsContext.toggleEditModal(false);
          },
        }
      );
    }
  };

  useEffect(() => {
    if (inputEl.current) {
      inputEl.current.value = todoContext.todo.title;
    }
  }, []);

  return (
    <div className="modal__container">
      <div className="modal__content">
        <h1 className="modal__title">Todo 수정하기</h1>
        <input ref={inputEl} type="text" className="modal__input--text" placeholder="할 일" />
        <div className="modal__buttons">
          <button className="modal__button" onClick={handleClickCancel}>
            취소
          </button>
          <button className="modal__button" onClick={handleClickUpdate}>
            수정
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoEditModal;
