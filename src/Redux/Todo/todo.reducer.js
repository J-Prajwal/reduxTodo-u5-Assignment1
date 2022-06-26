import {
  ADD_TODO_FAILURE,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  GET_TODO_FAILURE,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
  REMOVE_TODO_FAILURE,
  REMOVE_TODO_LOADING,
  REMOVE_TODO_SUCCESS,
  TOGGLE_TODO_FAILURE,
  TOGGLE_TODO_LOADING,
  TOGGLE_TODO_SUCCESS,
} from "./todo.actionTypes";

const initState = {
  todos: [],
  isLoading: false,
  isError: false,
};

export const todoReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TODO_LOADING: {
      return { ...state, isLoading: true, isError: false };
    }
    case ADD_TODO_SUCCESS: {
      return {
        ...state,
        todos: [...state.todos, payload],
        isLoading: false,
        isError: false,
      };
    }
    case ADD_TODO_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    case REMOVE_TODO_LOADING: {
      return { ...state, isLoading: true, isError: false };
    }
    case REMOVE_TODO_SUCCESS: {
      let newTodo = state.todos.filter((el) => el.id !== payload);
      return { ...state, todos: newTodo, isLoading: false, isError: false };
    }
    case REMOVE_TODO_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    case TOGGLE_TODO_LOADING: {
      return { ...state, isLoading: true, isError: false };
    }
    case TOGGLE_TODO_SUCCESS: {
      let newToggledTodo = state.todos.map((el) =>
        el.id == payload.id ? payload : el
      );
      return {
        ...state,
        todos: newToggledTodo,
        isLoading: false,
        isError: false,
      };
    }
    case TOGGLE_TODO_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    case GET_TODO_LOADING: {
      return { ...state, isLoading: true, isError: false };
    }
    case GET_TODO_SUCCESS: {
      return { ...state, todos: payload, isLoading: false, isError: false };
    }
    case GET_TODO_FAILURE: {
      return { ...state, isLoading: false, isError: false };
    }
    default:
      return state;
  }
};
