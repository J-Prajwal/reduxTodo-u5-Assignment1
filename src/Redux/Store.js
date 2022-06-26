import { legacy_createStore } from "redux";
import { todoReducer } from "./Todo/todo.reducer";

export const store = legacy_createStore(todoReducer);