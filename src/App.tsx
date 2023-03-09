import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css";
import TodoLayout from "./components/TodoLayout";

const App = () => {
  return (
    <main id="app">
      <TodoLayout>
        <TodoInput />
        <TodoList />
      </TodoLayout>
    </main>
  );
};

export default App;
