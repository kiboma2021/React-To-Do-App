import React from "react";
import ReactDOM from "react-dom";

import ToDoContainer from "./components/TodoContainer";

//const element = <h1>This is my second react project from scratch</h1>
//StrictMode - Activates checks and logs a warnig message at runtime

ReactDOM.render(
  <React.StrictMode> 
    <ToDoContainer/>
  </React.StrictMode>,
  document.getElementById('root')
);

