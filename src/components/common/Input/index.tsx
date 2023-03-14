import React, { forwardRef, InputHTMLAttributes } from "react";
import "./style.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(({ ...inputAttrs }, ref) => {
  return <input ref={ref} {...inputAttrs} className="input" />;
});

export default Input;
