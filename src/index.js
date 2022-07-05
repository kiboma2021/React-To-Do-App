/* eslint-disable import/order */
import React from 'react';
import ReactDOM from 'react-dom';
import ToDoContainer from './functionBased/components/TodoContainer';
import './functionBased/App.css';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import About from './functionBased/pages/About';
import NotMatch from './functionBased/pages/NotMatch';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ToDoContainer />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotMatch />} />

      </Routes>
    </Router>
    <footer>
      <div>App made by creative Tech solutions. Email omayioben@gmail.com</div>
    </footer>
  </React.StrictMode>,
  document.getElementById('root'),
);
