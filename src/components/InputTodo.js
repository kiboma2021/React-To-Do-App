import React, { Component } from "react";

class InputToDo extends Component {
  state = {
    title: ""
  };

  onChange = e => {
    this.setState({
      title: e.target.value
    })
  };

  render() {
    return (
      <form>
        <input
         type='text'
         placeholder="Add to do ..."
         value={this.state.title}
         onChange={this.onChange}
         />
        <button>Submit</button>
      </form>
    )
  }
}

export default InputToDo;