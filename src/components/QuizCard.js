import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

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
  const {img, title, hints} = props;
  return (
    <Card>
      <CardImage src={img}></CardImage>
      <CardTitle>
        <CardTitleText>
          <Title>{title}</Title>
        </CardTitleText>
      </CardTitle>
      <CardContent>
        <Quiz {...props.item} />
      </CardContent>
      <CardContent>
        <List items={hints} component={HintListItem} />
      </CardContent>
      <CardActions>
        <Button onClick={() => onHint()}>Hint?</Button>
        <Button primary onClick={() => onDone()}>Done</Button>
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
  mapStateToProps
)(QuizCard);

export default QuizCard;
