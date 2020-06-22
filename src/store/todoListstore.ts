import { combineReducers } from "redux";
import todos from "../reducers/todoReducer";
import visibilityFilter from "../reducers/setVisibilityReducer";

export default combineReducers({
  todos,
  visibilityFilter
});
