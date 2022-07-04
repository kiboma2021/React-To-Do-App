import React, { useState } from "react";
import styles from "./TodoItem.module.css"
import "../App.css"

const TodoItem = () => {
  const [editing, setEditing] = useState(false)

  const handleEditting = () => {
    setEditing (true)
  }
  
  const handleUpdatedDone = event => {
    if(event.key ==='Enter'){
      setEditing(false)
    }
  }

    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }
    const { completed, id, title } = this.props.todo

    let viewMode = {};
    let editMode = {};

    if(this.state.editing) {
      viewMode.display = "none"
    } else {
      editMode.display = "none"
    }

  return (
    <li className={styles.item}>
      <div onDoubleClick={this.handleEditting} style={viewMode} >
        <input 
          type='checkbox'
          className={styles.checkbox}
          checked={completed} 
          onChange={() => this.props.handleChangeProps(id)} 
        /> 
        <button onClick={() => this.props.delToDoProps(id) }>
          Delete
        </button>
        <span style={completed ? completedStyle : null}>
            {title}
        </span>
      </div>
      <input type="text" style={editMode} className="text-input" value={title}
      onChange={e => {
        this.props.setUpdate(e.target.value, id)
      }}
      onKeyDown={this.handleUpdatedDone}
      />
    </li>
  )
}


export default TodoItem;