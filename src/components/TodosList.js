import React from "react";

class ToDoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(
          todo => (
          <li key={todo.id}>{todo.title}</li>
          )
        )}
      </ul>
    )
  }
}
export default ToDoList;