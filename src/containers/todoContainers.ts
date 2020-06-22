export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOOGLE_TODO = "TOOGLE_TODO";
export const SHOW_ALL = "SHOW_ALL";
export const SHOW_ACTIVE = "SHOW_ACTIVE";
export const SHOW_COMPLETED = "SHOW_COMPLETED";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export interface Add_Todo {
  type: typeof ADD_TODO;
  text: any;
  id: any;
}

export interface Remove_Todo {
  type: typeof REMOVE_TODO;
  id: any;
}

export interface Toogle_Todo {
  type: typeof TOOGLE_TODO;
  id: any;
}
export interface Show_All {
  type: typeof SHOW_ALL;
}

export interface Show_Active {
  type: typeof SHOW_ACTIVE;
}

export interface Show_Completed {
  type: typeof SHOW_COMPLETED;
}

export interface Set_Visibility_Filter {
  type: typeof SET_VISIBILITY_FILTER;
  filter: any;
}

export type TodoActionTypes =
  | Add_Todo
  | Remove_Todo
  | Toogle_Todo
  | Show_All
  | Show_Active
  | Show_Completed;

export type TodoActionFilter = Set_Visibility_Filter;
