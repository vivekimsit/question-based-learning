import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Quiz from './Quiz';
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  CardTitle,
  CardTitleText,
  CardText,
  CardImage } from './Card';
import Button from './Button';
import HintListItem from './HintListItem';
import List from './List';
import SubHead from './SubHead';
import Title from './Title';

let QuizCard = (props) => {
  const {
    id, img, title, completed, hints, showHints,
    toggleHints, toggleQuiz } = props;
  return (
    <Card className={ completed ? 'done' : null }>
      <CardImage src={img}></CardImage>
      <CardTitle>
        <CardTitleText>
          <Title>{title}</Title>
        </CardTitleText>
      </CardTitle>
      <CardContent>
        <Quiz {...props.item} />
      </CardContent>
      { showHints ?
          <CardContent>
            <List items={hints} component={HintListItem} />
          </CardContent> : null
      }
      <CardActions>
        <Button onClick={() => toggleHints(id)}>
         { showHints ? 'CloseHints' : 'Hints?' }
        </Button>
        <Button primary onClick={() => toggleQuiz(id)}>Done</Button>
      </CardActions>
    </Card>
  );
};

const mapStateToProps = (state, ownProps) => {
  const hints = ownProps.item.hints.map(h => {
    return state.hintById[h];
  });
  return {...ownProps.item, hints};
};

QuizCard = connect(
  mapStateToProps,
  actions
)(QuizCard);

export default QuizCard;
