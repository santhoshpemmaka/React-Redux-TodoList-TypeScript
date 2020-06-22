export interface ITodoProps {
  addTodo?: (data) => void;
  todotext: string;
}

export interface ITodoTableProps {
  setVisibilityFilter?: (data) => void;
  deleteTodo?: (data) => void;
  toggleTodo?: (data) => void;
  todos: any;
}
