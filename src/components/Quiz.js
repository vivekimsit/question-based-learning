import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  CardTitle,
  CardTitleText,
  CardText,
  CardImage } from './Card';
import HintListItem from './HintListItem';
import List from './List';
import Button from './Button';
import Title from './Title';
import SubHead from './SubHead';

const IMG_SRC = 'https://d3hvwccx09j84u.cloudfront.net/680,480/image/w14-r2-7460327b.jpg';

let Quiz = ({ completed, title, text, hints, onHint, onDone }) => {
  console.log(hints);
  return (<Card>
    <CardImage src={IMG_SRC}></CardImage>
    <CardTitle>
      <CardTitleText>
        <Title>{title}</Title>
      </CardTitleText>
    </CardTitle>
    <CardContent>
      <p>{text}</p>
    </CardContent>
    <CardContent>
      <List items={hints} component={HintListItem} />
    </CardContent>
    <CardActions>
      <Button onClick={() => onHint()}>Hint?</Button>
      <Button primary onClick={() => onDone()}>Done</Button>
    </CardActions>
  </Card>);
};

const mapStateToProps = (state, ownProps) => {
  return Object.assign({}, ...ownProps, {
    hints: ownProps.hints.map(h => {
      let hint = state.hintById[h];
      return hint;
    })
  });
};

Quiz = connect(
  mapStateToProps
)(Quiz);

export default Quiz;
