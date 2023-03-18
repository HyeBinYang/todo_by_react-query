import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Spinner from "./components/common/Spinner";
import useGetSessionQuery from "./utils/query/useGetSessionQuery";

const Todo = lazy(() => import("./pages/Todo"));
const Login = lazy(() => import("./pages/Login"));

const App = () => {
  const { data } = useGetSessionQuery();

  return (
    <main id="app">
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="todo" element={<Todo />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </Suspense>
    </main>
  );
};

export default App;
