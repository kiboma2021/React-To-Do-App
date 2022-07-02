import React, { Component } from "react";

class InputToDo extends Component {
  state = {
    title: ""
  };
  render() {
    return (
      <form>
        <input type='text' placeholder="Add to do ..." value={this.state.title} />
        <button>Submit</button>
      </form>
    )
  }
}

export default InputToDo;