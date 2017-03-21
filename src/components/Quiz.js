import React, { PropTypes } from 'react';

const Quiz = ({ onClick, completed, text }) => (
  <li onClick={onClick} >
    {text}
  </li>
);

export default Quiz;
