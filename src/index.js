import React from "react";
import ReactDOM from "react-dom";
import ToDoContainer from "./functionBased/components/TodoContainer";
import "./functionBased/App.css"
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ToDoContainer/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

