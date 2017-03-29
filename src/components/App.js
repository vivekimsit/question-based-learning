import React, { PropTypes } from 'react';

import NavBar from './NavBar';
import Quiz from './Quiz';
import VisibleQuizList from './VisibleQuizList';

const App = () => (
  <main>
    <NavBar />
    <VisibleQuizList />
  </main>
);

App.propTypes = {
  params: PropTypes.shape({
    filter: PropTypes.string,
  }),
};

export default App;
