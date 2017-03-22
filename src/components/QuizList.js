import React, { PropTypes } from 'react';
import Quiz from './Quiz';

const QuizList = ({ quizzes, onQuizClick }) => (
  <ul>
    {quizzes.map(quiz =>
      <Quiz
        key={quiz.id}
        {...quiz}
        onClick={() => onQuizClick(quiz.id)}
      />
    )}
  </ul>
);

QuizList.propTypes = {
  quizzes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onQuizClick: PropTypes.func.isRequired,
};

export default QuizList;
