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
    console.log(this.state.title);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
         type='text'
         placeholder="Add to do ..."
         name="title"
         value={this.state.title}
         onChange={this.onChange}
         />
        <button>Submit</button>
      </form>
    )
  }
}

export default InputToDo;