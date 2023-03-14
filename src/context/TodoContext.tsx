import { createContext, ReactNode, useMemo, useState } from "react";
import { Todo } from "../types/todo";

interface TodoContextProviderProps {
  children: ReactNode;
}

interface TodoState {
  todo: Todo;
  todoList: Todo[];
  editModal: boolean;
  keyword: string;
}

interface TodoActions {
  getTodo(todo: Todo): void;
  toggleEditModal(active: boolean): void;
  onChangeKeyword(value: string): void;
}

export const TodoContext = createContext<TodoState>({
  todo: {
    title: "",
    done: false,
  },
  todoList: [],
  editModal: false,
  keyword: "",
});

export const TodoActionsContext = createContext<TodoActions>({
  getTodo: (todo: Todo) => {},
  toggleEditModal: (active: boolean) => {},
  onChangeKeyword: (value: string) => {},
});

const TodoContextProvider = ({ children }: TodoContextProviderProps) => {
  const [keyword, setKeyword] = useState("");
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [todo, setTodo] = useState<Todo>({
    title: "",
    done: false,
  });
  const [editModal, setEditModal] = useState(false);

  const values = {
    todo,
    todoList,
    editModal,
    keyword,
  };
  const actions = useMemo(
    () => ({
      getTodo(todo: Todo) {
        setTodo(todo);
      },
      initTodoList(todoList: Todo[]) {
        setTodoList(todoList);
      },
      toggleEditModal(active: boolean) {
        setEditModal(active);
      },
      onChangeKeyword(value: string) {
        setKeyword(value);
      },
    }),
    []
  );

  return (
    <TodoActionsContext.Provider value={actions}>
      <TodoContext.Provider value={values}>{children}</TodoContext.Provider>
    </TodoActionsContext.Provider>
  );
};

export default TodoContextProvider;
