import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import SingleTodo from "./SingleTodo";

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/todos/:id" element={<SingleTodo />}></Route>
      </Routes>
    </div>
  );
};

export default Pages;
