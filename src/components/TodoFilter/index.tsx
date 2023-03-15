import React, { useContext, useMemo } from "react";
import { TodoActionsContext, TodoContext } from "../../context/TodoContext";
import Dropdown from "../common/Dropdown";

const TodoFilter = () => {
  const context = useContext(TodoActionsContext);
  const { done } = useContext(TodoContext);

  const currentFilter = useMemo(() => {
    if (done === null) return "모두";
    return done ? "완료됨" : "완료 안됨";
  }, [done]);

  const handleSelect = (e: React.MouseEvent<HTMLLIElement>) => {
    const target = e.target as HTMLUListElement;

    if (target.classList.contains("done")) {
      context.selectDone(true);
    } else if (target.classList.contains("undone")) {
      context.selectDone(false);
    } else {
      context.selectDone(null);
    }
  };

  return (
    <Dropdown>
      <Dropdown.Trigger>{currentFilter}</Dropdown.Trigger>
      <Dropdown.List onClick={handleSelect}>
        <Dropdown.Item className="all">모두</Dropdown.Item>
        <Dropdown.Item className="done">완료됨</Dropdown.Item>
        <Dropdown.Item className="undone">완료 안됨</Dropdown.Item>
      </Dropdown.List>
    </Dropdown>
  );
};

export default TodoFilter;
