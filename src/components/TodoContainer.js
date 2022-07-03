import React from "react";
import ToDoList from "./TodosList";
import Header from "./Header";
import InputToDo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";

class ToDoContainer extends React.Component {
  state = {
    todos: [


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

  setUpdate = (updatedTitle,id) => {
    this.setState ({
      todos: this.state.todos.map (todo => {
        if(todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      }),
    })
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
    .then(response => response.json())
    .then(data => console.log(data));
  }

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputToDo addToDoProps = {this.addToDoItem} />
          <ToDoList 
            todos = {this.state.todos} 
            handleChangeProps={this.handleChange} 
            delToDoProps={this.delToDo}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    )
  }
}

export default ToDoContainer;