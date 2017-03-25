import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Button from './Button.js';
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  CardTitle,
  CardTitleText,
  CardText,
  CardImage } from './Card.js';

const IMG_SRC = 'https://d3hvwccx09j84u.cloudfront.net/680,480/image/w14-r2-7460327b.jpg';

const Title = styled.span`
  font-weight: 500;
  letter-spacing: .005em;
  line-height: 24px;
  font-size: 16px;
  max-height: 40px;
`;

const SubHead = styled.span`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: .01em;
  line-height: 24px;
  color: rgba(0,0,0,0.54);
`;

const Quiz = ({ onClick, completed, title, text }) => (
    <Card>
      <CardImage src={IMG_SRC}></CardImage>
      <CardTitle>
        <CardTitleText>
          <Title>{title}</Title>
        </CardTitleText>
      </CardTitle>
      <CardContent>
        <p>{text}</p>
      </CardContent>
      <CardActions>
        <Button>Hint?</Button>
        <Button primary>Done</Button>
      </CardActions>
    </Card>
);

export default Quiz;
