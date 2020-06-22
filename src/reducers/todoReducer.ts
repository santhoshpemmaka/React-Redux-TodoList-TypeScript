import {
  TodoActionTypes,
  ADD_TODO,
  REMOVE_TODO,
  TOOGLE_TODO
} from "../containers/todoContainers";

let InitialState = [];

const TodoReducer = (state = InitialState, action: TodoActionTypes) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case TOOGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case REMOVE_TODO:
      const numIndex = Number(action.id);
      return state.filter(todo => todo.id !== numIndex);
    default:
      return state;
  }
};

export default TodoReducer;
