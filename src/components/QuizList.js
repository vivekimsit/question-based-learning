import React, { PropTypes } from 'react';
import List from './List';
import QuizCard from './QuizCard';

const QuizList = ({quizzes}) => (
  <List items={quizzes} component={QuizCard} />
);

QuizList.propTypes = {
  quizzes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired
};

export default QuizList;
