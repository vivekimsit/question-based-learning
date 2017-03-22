import React, { PropTypes } from 'react';
import VisibleQuizList from './VisibleQuizList';

const App = () => (
  <div>
    <VisibleQuizList />
  </div>
);

App.propTypes = {
  params: PropTypes.shape({
    filter: PropTypes.string,
  }),
};

export default App;
