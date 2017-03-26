import React, { PropTypes } from 'react';
import Quiz from './Quiz';

const QuizListItem = (props) => {
  const quiz = props.item;
  return (<Quiz
    {...quiz}
    onDone={() => onQuizClick(quiz.id)}
    onHint={() => onHintClick(hint.id)}
  />);
};

export default QuizListItem;
