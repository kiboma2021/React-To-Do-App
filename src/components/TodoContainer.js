import React from "react";
import ToDoList from "./TodosList";
import Header from "./Header";
import InputToDo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";

class ToDoContainer extends React.Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Setup development environment",
        completed: true
      },
      {
        id: uuidv4(),
        title: "Develop website and add content",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Deploy to live server",
        completed: false
      }
    ]
  };
  handleChange = id => {
    this.setState(prevState => ({
      todos: prevState.todos.map (
        todo => {
          if(todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            }
          }
          return todo;
        }
      )
    })
  )}

  delToDo = id => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !==id;
        })
      ]
    })
  }

  addToDoItem = title => {
    const newToDo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    this.setState ({
      todos: [...this.state.todos, newToDo]
    });
  };

  render() {
    return (
      <div>
        <Header />
        <InputToDo addToDoProps = {this.addToDoItem} />
        <ToDoList 
          todos = {this.state.todos} 
          handleChangeProps={this.handleChange} 
          delToDoProps={this.delToDo}
        />
      </div>
    )
  }
}

export default ToDoContainer;