import React from "react";
import ReactDOM from "react-dom";
import ToDoContainer from "./functionBased/components/TodoContainer";
import "./functionBased/App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<ToDoContainer/>} />
          
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

