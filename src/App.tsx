import React from "react";
import TodoList from "./components/TodoList";
import "./App.css";
import TodoLayout from "./components/TodoLayout";
import TodoSearch from "./components/TodoSearch";
import TodoAddButton from "./components/TodoAddButton";

const App = () => {
  return (
    <main id="app">
      <TodoLayout>
        <TodoSearch />
        <TodoList />
      </TodoLayout>
      <TodoAddButton />
    </main>
  );
};

export default App;
