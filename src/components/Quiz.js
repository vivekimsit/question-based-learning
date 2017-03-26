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
import Button from './Button';
import HintListItem from './HintListItem';
import List from './List';
import SubHead from './SubHead';
import Title from './Title';

let Quiz = ({ completed, title, text, hints, img, onHint, onDone }) => {
  return (<Card>
    <CardImage src={img}></CardImage>
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
  const hints = ownProps.hints.map(h => {
    return state.hintById[h];
  });
  const img = 'https://d3hvwccx09j84u.cloudfront.net/680,480/image/w14-r2-7460327b.jpg';
  return Object.assign({}, ...ownProps, {
    hints, img
  });
};

Quiz = connect(
  mapStateToProps
)(Quiz);

export default Quiz;
