import { createContext, ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { Todo } from "../types/todo";

interface TodoContextProviderProps {
  children: ReactNode;
}

interface TodoState {
  todo: Todo;
  editModal: boolean;
}

interface TodoActions {
  getTodo(todo: Todo): void;
  toggleEditModal(active: boolean): void;
}

export const TodoContext = createContext<TodoState>({
  todo: {
    title: "",
    done: false,
  },
  editModal: false,
});

export const TodoActionsContext = createContext<TodoActions>({
  getTodo: (todo: Todo) => {},
  toggleEditModal: (active: boolean) => {},
});

const TodoContextProvider = ({ children }: TodoContextProviderProps) => {
  const [todo, setTodo] = useState<Todo>({
    title: "",
    done: false,
  });
  const [editModal, setEditModal] = useState(false);
  const actions = useMemo(
    () => ({
      getTodo(todo: Todo) {
        setTodo(todo);
      },
      toggleEditModal(active: boolean) {
        setEditModal(active);
      },
    }),
    []
  );

  return (
    <TodoActionsContext.Provider value={actions}>
      <TodoContext.Provider value={{ todo, editModal }}>{children}</TodoContext.Provider>
    </TodoActionsContext.Provider>
  );
};

export default TodoContextProvider;
