import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  removeTodoFailure,
  removeTodoLoading,
  removeTodoSuccess,
  toggleTodoFailure,
  toggleTodoLoading,
  toggleTodoSuccess,
} from "../Redux/Todo/todo.actions";

const SingleTodo = () => {
  const { todos } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const [currTodo, setCurrTodo] = useState({});

  const toggleTodo = (id, newStatus) => {
    dispatch(toggleTodoLoading());
    axios
      .patch(`http://localhost:8080/todos/${id}`, { status: newStatus })
      .then((res) => {
        dispatch(toggleTodoSuccess(res.data));
      })
      .catch((err) => {
        dispatch(toggleTodoFailure());
      });
  };

  const removeTodo = (id) => {
    dispatch(removeTodoLoading());
    axios
      .delete(`http://localhost:8080/todos/${id}`)
      .then((res) => {
        dispatch(removeTodoSuccess(id));
        navigate("/");
      })
      .catch((err) => {
        dispatch(removeTodoFailure());
      });
  };

  const handleGotoHomepage = () => {
    navigate("/");
  }

  useEffect(() => {
    let currTodo = todos.find((el) => el.id == Number(id));
    currTodo && setCurrTodo(currTodo);
  });
  return (
    <div>
      <h1 style={{color: "teal"}}>Your Task</h1>
      <h3>
        {currTodo.title} {currTodo.status ? "True" : "False"}
      </h3>
      <button onClick={() => toggleTodo(currTodo.id, !currTodo.status)}>
        Toggle Status
      </button>
      <button onClick={() => removeTodo(currTodo.id)}>Remove</button>

      <br />
      <br />
      <br />

      <div>
        <button onClick={() => handleGotoHomepage()}>Go To Homepage</button>
      </div>
    </div>
  );
};

export default SingleTodo;
