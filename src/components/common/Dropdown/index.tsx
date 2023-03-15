import React, { createContext, ReactNode, useState, useContext, LiHTMLAttributes } from "react";
import "./style.css";

interface DropdownProps {
  children: ReactNode;
}

interface DropdownListProps extends DropdownProps {
  onClick: React.MouseEventHandler<HTMLElement>;
}

interface DropdownItemProps extends LiHTMLAttributes<HTMLLIElement> {}

interface DropdownState {
  open: boolean;
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropdownContext = createContext<DropdownState | undefined>(undefined);

const Dropdown = ({ children }: DropdownProps) => {
  const [open, toggle] = useState(true);

  return (
    <div className="dropdown__container">
      <DropdownContext.Provider value={{ open, toggle }}>{children}</DropdownContext.Provider>
    </div>
  );
};

const Trigger = ({ children }: DropdownProps) => {
  const context = useContext(DropdownContext);

  const handleClickSelect = () => {
    context?.toggle(!context.open);
  };

  return (
    <div className="dropdown__trigger" onClick={handleClickSelect}>
      {children}
    </div>
  );
};

const List = ({ children, onClick, ...props }: DropdownListProps) => {
  const context = useContext(DropdownContext);

  return (
    <>
      {context?.open && (
        <ul
          className="dropdown__list"
          onClick={(e) => {
            onClick(e);
            context.toggle(false);
          }}
          {...props}
        >
          {children}
        </ul>
      )}
    </>
  );
};

const Item = ({ children, ...props }: DropdownItemProps) => {
  return (
    <li {...props} className={`dropdown__item ${props.className}`}>
      {children}
    </li>
  );
};

Dropdown.Trigger = Trigger;
Dropdown.List = List;
Dropdown.Item = Item;

export default Dropdown;
