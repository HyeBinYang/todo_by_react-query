import React, { useContext, useRef } from "react";
import { TodoActionsContext } from "../../context/TodoContext";
import useAddTodoMutation from "../../utils/mutation/useAddTodoMutation";
import Input from "../common/Input";
import Modal from "../common/Modal";
import "./style.css";

const TodoAddModal = () => {
  const todoInputEl = useRef<HTMLInputElement>(null);
  const mutation = useAddTodoMutation();
  const todoActionsContext = useContext(TodoActionsContext);

  const handleClickClose = () => {
    todoActionsContext.toggleModal("");
  };

  const handleClickAdd = () => {
    if (!todoInputEl.current) return;

    mutation.mutate(
      { title: todoInputEl.current.value, done: false },
      {
        onSuccess() {
          todoActionsContext.toggleModal("");
        },
      }
    );
    todoInputEl.current.value = "";
  };

  return (
    <Modal>
      <h1 className="modal__title">할 일 등록하기</h1>
      <Input ref={todoInputEl} type="text" className="modal__input--text" placeholder="오늘 할 일" />
      <div className="modal__buttons">
        <button className="modal__button" onClick={handleClickClose}>
          닫기
        </button>
        <button className="modal__button" onClick={handleClickAdd}>
          등록
        </button>
      </div>
    </Modal>
  );
};

export default TodoAddModal;
