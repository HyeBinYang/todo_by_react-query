import React, { FC, ReactNode } from "react";
import "./style.css";

interface ModalProps {
  children: ReactNode;
}

const Modal: FC<ModalProps> = ({ children }) => {
  return (
    <div className="modal__container">
      <div className="modal__content">{children}</div>;
    </div>
  );
};

export default Modal;
