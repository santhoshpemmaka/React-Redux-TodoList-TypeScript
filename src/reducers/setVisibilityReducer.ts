import {
  TodoActionFilter,
  SHOW_ALL,
  SET_VISIBILITY_FILTER
} from "../containers/todoContainers";

const visibilityFilter = (state = SHOW_ALL, action: TodoActionFilter) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
