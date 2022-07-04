import React from "react";
import TodoItem from "./TodoItem";

const ToDoList = props => {
  return (
    <ul>
      {props.todos.map(
        todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={props.handleChangeProps} 
          delToDoProps={props.delToDoProps}
          setUpdate={props.setUpdate}
        />
        )
      )}
    </ul>
  )
}

export default ToDoList;