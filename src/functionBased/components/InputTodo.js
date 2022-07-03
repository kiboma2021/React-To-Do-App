import React, { useState } from "react";

const InputToDo = props => {
  const [inputText, setInputText] = useState({
    title: "",
  })
  const onChange = e => { 
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (inputText.title.trim()){
      props.addToDoProps(inputText.title);
      setInputText ({
        title: ""
      });
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
        value={inputText.title}
        onChange={onChange}
        />
      <button className="input-submit">Submit</button>
    </form>
  )
}

export default InputToDo;