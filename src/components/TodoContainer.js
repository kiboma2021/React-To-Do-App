import React from "react";
import ToDoList from "./TodosList";
import Header from "./Header";
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
  handleChange = id => {
    this.setState({
      todos: this.state.todos.map (
        todo => {
          if(todo.id === id) {
            todo.completed = !todo.completed;
          }
          return todo;
        }
      )
    })
   // console.log("Clicked", id)
  }
  render() {
    return (
      <div>
        <Header />
        <ToDoList todos = {this.state.todos} handleChangeProps={this.handleChange} />
      </div>
    )
  }
}

export default ToDoContainer;