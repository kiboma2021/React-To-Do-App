/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotMatch = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h3>No match for this page</h3>
      <p onClick={() => { navigate('/'); }}>Home</p>
    </div>
  );
};
export default NotMatch;
