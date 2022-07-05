/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import TodoItem from './TodoItem';

const ToDoList = (props) => (
  <ul>
    {props.todos.map(
      (todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={props.handleChangeProps}
          delToDoProps={props.delToDoProps}
          setUpdate={props.setUpdate}
        />
      ),
    )}
  </ul>
);

export default ToDoList;
