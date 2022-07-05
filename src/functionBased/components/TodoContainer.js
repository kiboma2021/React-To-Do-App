/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ToDoList from './TodosList';
import Header from './Header';
import InputToDo from './InputTodo';

const ToDoContainer = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // getting stored items
    const temp = localStorage.getItem('todos');
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, [setTodos]);

  useEffect(() => {
    // storing to do items
    const temp = JSON.stringify(todos);
    localStorage.setItem('todos', temp);
  }, [todos]);

  const handleChange = (id) => {
    setTodos((prevState) => prevState.map(
      (todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      },
    ));
  };

  const delToDo = (id) => {
    setTodos([
      ...todos.filter((todo) => todo.id !== id),
    ]);
  };

  const addToDoItem = (title) => {
    const newToDo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    setTodos([...todos, newToDo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    );
  };

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputToDo addToDoProps={addToDoItem} />
        <ToDoList
          todos={todos}
          handleChangeProps={handleChange}
          delToDoProps={delToDo}
          setUpdate={setUpdate}
        />
      </div>
    </div>
  );
};

export default ToDoContainer;
