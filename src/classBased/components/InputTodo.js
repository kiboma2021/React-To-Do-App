import React, { useState } from "react";

const InputToDo = () => {
  const [inputText, setInputText] = useState({
    fName: "",
    lastName: "",
  })
  const onChange = e => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    })
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Submited...")
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          className="input-text"
          placeholder="Add first name"
          value={inputText.fName}
          name="fName"
          onChange={onChange}
        />
        <input
          type='text'
          placeholder="Add Last Name"
          name="lastName"
          className="input-text"
          value={inputText.lastName}
          onChange={onChange}
          />
        <button className="input-submit">Submit</button>
      </form>
      <h2>{inputText.fName}</h2>
      <h2>{inputText.lastName}</h2>
    </>
  )
}

export default InputToDo;