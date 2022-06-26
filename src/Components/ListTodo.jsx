import React from "react";
import { Link } from "react-router-dom";

const ListTodo = ({ todos }) => {
  console.log(todos);
  return (
    <div>
      {todos?.map((el) => {
        return (
          <h4>
            <Link key={el.id} to={`/todos/${el.id}`} style={{textDecoration: "none", color: "black", cursor: "pointer"}}>
              {el.title}
            </Link>
          </h4>
        );
      })}
    </div>
  );
};

export default ListTodo;
