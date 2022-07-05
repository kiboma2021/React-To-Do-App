/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const InputToDo = (props) => {
  const [inputText, setInputText] = useState({
    title: '',
  });
  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      props.addToDoProps(inputText.title);
      setInputText({
        title: '',
      });
    } else {
      alert('Please insert to do item...');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        placeholder="Add to do ..."
        name="title"
        className="input-text"
        value={inputText.title}
        onChange={onChange}
      />
      <button className="input-submit"><FaPlusCircle /></button>
    </form>
  );
};

export default InputToDo;
