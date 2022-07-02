import React from "react";
class ToDoContainer extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false
      }
    ]
  };
  render() {
    return (
      <React.Fragment> 
        <h1> Hello. Welcome to my to do app</h1>
        <p>This is the best App in the market</p>
        <ul>
          {this.state.todos.map(
            todo => (
              <li>{todo.title} </li>
            )
          )}
        </ul>

      </React.Fragment>
    )
  }
}

export default ToDoContainer;