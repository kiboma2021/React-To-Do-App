import React, { useState } from "react";

const InputToDo= props => {
  const [title, setTitle] = useState("")

  const onChange = e => {
    setTitle(e.target.value)
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (title.trim()){
      props.addToDoProps(title);
      setTitle ("");
    }
    else
    {
      alert ("Please insert to do item...")
    }
  }


  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type='text'
        placeholder="Add to do ..."
        name="title"
        className="input-text"
        value={title}
        onChange={onChange}
        />
      <button className="input-submit">Submit</button>
    </form>
  )
}


export default InputToDo;