import React, { useContext } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css";
import TodoLayout from "./components/TodoLayout";
import TodoEditModal from "./components/TodoEditModal";
import { TodoContext } from "./context/TodoContext";

const App = () => {
  // const context = useContext(TodoContext);

  return (
    <main id="app">
      <TodoLayout>
        <TodoInput />
        <TodoList />
      </TodoLayout>
      {/* {context.editModal && <TodoEditModal />} */}
    </main>
  );
};

export default App;
