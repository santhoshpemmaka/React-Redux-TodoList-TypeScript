import {
  TodoActionTypes,
  TodoActionFilter,
  ADD_TODO,
  REMOVE_TODO,
  TOOGLE_TODO,
  SET_VISIBILITY_FILTER
} from "../containers/todoContainers";

let TodoId = 1;

export const addTodo = (text): TodoActionTypes => {
  return {
    type: ADD_TODO,
    id: TodoId++,
    text
  };
};

export const deleteTodo = (id): TodoActionTypes => {
  return {
    type: REMOVE_TODO,
    id
  };
};

export const toggleTodo = (id): TodoActionTypes => {
  return {
    type: TOOGLE_TODO,
    id
  };
};

export const setVisibilityFilter = (filter): TodoActionFilter => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
};
