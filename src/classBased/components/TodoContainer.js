/* eslint-disable no-param-reassign */
/* eslint-disable semi */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/sort-comp */
/* eslint-disable react/state-in-constructor */
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import ToDoList from './TodosList';
import Header from './Header';
import InputToDo from './InputTodo';

class ToDoContainer extends React.Component {
  state = {
    todos: [

    ],
  };

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map(
        (todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        },
      ),
    }));
  }

  delToDo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => todo.id !== id),
      ],
    });
  }

  addToDoItem = (title) => {
    const newToDo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newToDo],
    });
  };

  setUpdate = (updatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    });
  }

  componentDidMount() {
    const temp = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      const temp = JSON.stringify(this.state.todos);
      localStorage.setItem('todos', temp);
    }
  }

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputToDo addToDoProps={this.addToDoItem} />
          <ToDoList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            delToDoProps={this.delToDo}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}

export default ToDoContainer;
