import React, { PropTypes } from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 4em;
  background: papayawhip;
`;

const QuizListItem = (props) => (
      <Quiz
        key={quiz.id}
        {...quiz}
        onDone={() => onQuizClick(quiz.id)}
        onHint={() => onHintClick(hint.id)}
      />
  <Wrapper>
    {props.text}
  </Wrapper>
);

export default QuizListItem;
