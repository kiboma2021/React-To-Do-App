import React, { Component } from "react";

class InputToDo extends Component {
  state = {
    title: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.title.trim()){
      this.props.addToDoProps(this.state.title);
      this.setState ({
        title: ""
      });
    }
    else
    {
      alert ("Please insert to do item...")
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input
         type='text'
         placeholder="Add to do ..."
         name="title"
         className="input-text"
         value={this.state.title}
         onChange={this.onChange}
         />
        <button className="input-submit">Submit</button>
      </form>
    )
  }
}

export default InputToDo;