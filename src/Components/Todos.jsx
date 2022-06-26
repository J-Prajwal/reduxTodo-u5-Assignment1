import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTodoFailure,
  getTodoLoading,
  getTodoSuccess,
} from "../Redux/Todo/todo.actions";
import AddTodo from "./AddTodo";
import ListTodo from "./ListTodo";

const Todos = () => {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state);

  const getTodos = () => {
    dispatch(getTodoLoading());
    axios
      .get("http://localhost:8080/todos")
      .then((r) => {
        dispatch(getTodoSuccess(r.data));
      })
      .catch((err) => {
        dispatch(getTodoFailure());
      });
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <AddTodo />
      <ListTodo todos={todos} />
    </div>
  );
};

export default Todos;
