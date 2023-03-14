import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "./App.css";
import TodoLayout from "./components/TodoLayout";
import TodoSearch from "./components/TodoSearch";

const App = () => {
  return (
    <main id="app">
      <TodoLayout>
        <TodoInput />
        <TodoSearch />
        <TodoList />
      </TodoLayout>
    </main>
  );
};

export default App;
