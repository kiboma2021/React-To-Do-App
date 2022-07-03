import React from "react";
import TodoItem from "./TodoItem";

class ToDoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(
          todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={this.props.handleChangeProps} 
            delToDoProps={this.props.delToDoProps}
            setUpdate={this.props.setUpdate}
          />
          )
        )}
      </ul>
    )
  }
}
export default ToDoList;