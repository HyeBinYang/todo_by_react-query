import React, { lazy } from "react";
import "./App.css";
import useGetSessionQuery from "./utils/query/useGetSessionQuery";

const TodoLayout = lazy(() => import("./components/TodoLayout"));
const TodoList = lazy(() => import("./components/TodoList"));
const TodoSearch = lazy(() => import("./components/TodoSearch"));
const TodoAddButton = lazy(() => import("./components/TodoAddButton"));
const LoginForm = lazy(() => import("./components/LoginForm"));

const App = () => {
  const { data: me, isLoading } = useGetSessionQuery();

  if (isLoading) return null;

  return (
    <main id="app">
      {me ? (
        <>
          <TodoLayout>
            <TodoSearch />
            <TodoList />
          </TodoLayout>
          <TodoAddButton />
        </>
      ) : (
        <LoginForm />
      )}
    </main>
  );
};

export default App;
