import React, { Component } from "react";
import {
  deleteTodo,
  toggleTodo,
  setVisibilityFilter
} from "../actions/todoAction";
import { connect } from "react-redux";
import {
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED
} from "../containers/todoContainers";
import { bindActionCreators } from "redux";
import "./createTodo.css";
import {ITodoTableProps} from "../interface/createtodo";

class Table extends Component<ITodoTableProps, any> {
	props: any;
	render() {
		return (
			<div className='todos'>
				<div className='todoHeader'>
					<span
						className='todoShow'
						onClick={() => this.props.setVisibilityFilter(SHOW_ALL)}>
						All
					</span>
					<span
						className='todoShow'
						onClick={() => this.props.setVisibilityFilter(SHOW_COMPLETED)}>
						Completed
					</span>
					<span
						className='todoShow'
						onClick={() => this.props.setVisibilityFilter(SHOW_ACTIVE)}>
						Active
					</span>
				</div>
				<div>
					{this.props.todos && this.props.todos.length > 0 ? (
						<div className='todoTable'>
							<div className='tableHeader'>
								<span className='todohead'>Todos</span>
								<span className='todohead1'>Actions</span>
							</div>
							{this.props.todos &&
								this.props.todos.map((todo) => {
									return (
										<div key={todo.id} className='todolist'>
											<span
												style={{
													textDecoration: todo.completed
														? "line-through"
														: "none",
												}}>
												{todo.text}
											</span>
											<span className='todobtns'>
												<button
													onClick={() => this.props.deleteTodo(todo.id)}
													className='todobtn'>
													Remove
												</button>
												<button
													onClick={() => this.props.toggleTodo(todo.id)}
													className='todobtn'>
													Completed
												</button>
											</span>
										</div>
									);
								})}
						</div>
					) : null}
				</div>
			</div>
		);
	}
}

const getvisibleTodos = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_ACTIVE:
      return todos.filter(todo => !todo.completed);
    case SHOW_COMPLETED:
      return todos.filter(todo => todo.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapDistachToProps = dispatch => {
  return {
    deleteTodo: bindActionCreators(deleteTodo, dispatch),
    toggleTodo: bindActionCreators(toggleTodo, dispatch),
    setVisibilityFilter: bindActionCreators(setVisibilityFilter, dispatch)
  };
};

const mapStateToProps = state => {
  return {
    todos: getvisibleTodos(state.todos, state.visibilityFilter),
    visibilityFilter: state.visibilityFilter
  };
};

export default connect(
  mapStateToProps,
  mapDistachToProps
)(Table);
