import React, { PropTypes } from 'react';
import List from './List';
import Quiz from './Quiz';

const QuizList = ({quizzes, onQuizClick, onHintClick}) => (
  <ul>
    {quizzes.map(quiz =>
      <Quiz
        key={quiz.id}
        {...quiz}
        onDone={() => onQuizClick(quiz.id)}
        onHint={() => onHintClick(5)}
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
