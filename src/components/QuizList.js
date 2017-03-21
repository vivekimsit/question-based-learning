import React, { PropTypes } from 'react';
import Quiz from './Quiz';

const QuizList = ({ quizzes, onQuizClick }) => (
  <ul>
    {quizzes.map(todo =>
      <Quiz
        key={quiz.id}
        {...quiz}
        onClick={() => onQuizClick(quiz.id)}
      />
    )}
  </ul>
);

export default QuizList;
