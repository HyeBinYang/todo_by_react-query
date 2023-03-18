import { createContext, ReactNode, useMemo, useState } from "react";
import { Todo } from "../types/todo";

type Modal = "" | "add" | "edit";

interface TodoContextProviderProps {
  children: ReactNode;
}

interface TodoState {
  todo: Todo;
  todoList: Todo[];
  modal: Modal;
  keyword: string;
  done: boolean | null;
}

interface TodoActions {
  getTodo(todo: Todo): void;
  toggleModal(modal: Modal): void;
  onChangeKeyword(value: string): void;
  selectDone(done: boolean | null): void;
}

export const TodoContext = createContext<TodoState>({
  todo: {
    title: "",
    done: false,
    writer: "",
  },
  todoList: [],
  modal: "",
  keyword: "",
  done: null,
});

export const TodoActionsContext = createContext<TodoActions>({
  getTodo: (todo: Todo) => {},
  toggleModal: (modal: Modal) => {},
  onChangeKeyword: (value: string) => {},
  selectDone: (done: boolean | null) => {},
});

const TodoContextProvider = ({ children }: TodoContextProviderProps) => {
  const [done, setDone] = useState<boolean | null>(null);
  const [keyword, setKeyword] = useState("");
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [todo, setTodo] = useState<Todo>({
    title: "",
    done: false,
    writer: "",
  });
  const [modal, setModal] = useState<Modal>("");

  const values = {
    done,
    todo,
    todoList,
    modal,
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
      toggleModal(modal: Modal) {
        setModal(modal);
      },
      onChangeKeyword(value: string) {
        setKeyword(value);
      },
      selectDone(done: boolean | null) {
        setDone(done);
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
