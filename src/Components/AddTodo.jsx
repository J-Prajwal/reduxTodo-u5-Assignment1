import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addTodoFailure,
  addTodoLoading,
  addTodoSuccess,
} from "../Redux/Todo/todo.actions";

const AddTodo = () => {
  const [data, setData] = useState("");
  const dispatch = useDispatch();

  const addTodo = (payload) => {
    dispatch(addTodoLoading());
    axios
      .post("http://localhost:8080/todos", payload)
      .then((r) => {
        dispatch(addTodoSuccess(r.data));
      })
      .catch(() => {
        dispatch(addTodoFailure());
      });
  };

  const handleAddTodo = () => {
    if (data) {
      const payload = { title: data, status: false };
      addTodo(payload);
      setData("");
    }
  };
  return (
    <div>
      <h2>Add Todo</h2>
      <input
        type="text"
        placeholder="enter task here..."
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Task</button>
    </div>
  );
};

export default AddTodo;
